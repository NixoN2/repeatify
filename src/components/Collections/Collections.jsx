import {useCollections} from "./hooks/useCollections";
import { FaSearch } from "react-icons/fa";
import Collection from "./Collection";
import {useSelector} from "react-redux";
import {useState} from "react"
const Collections = () => {
    const [search, setSearch] = useState("");
    const onSearch = (e) => setSearch(e.target.value);
    useCollections();
    const {user} = useSelector(state=>state.user);
    const {collections} = useSelector(state=>state.collections);
    const filtered = collections && collections.filter(collection =>
        (collection.name.toLowerCase().includes(search) ||
        collection.author.first_name.toLowerCase().includes(search) ||
        collection.author.last_name.toLowerCase().includes(search)) &&
        (collection.privateCollection === false || collection.author.id === user.id)
    );
    return (
        <div className="w-3/5 mt-32 min-h-screen mb-20 rounded-xl py-8 px-12 bg-white">
            <p className="text-center text-4xl text-carolina-blue mb-4">Collections</p>
            <div className="mb-10 mx-auto flex rounded-md shadow-sm w-3/6 h-10 border-2">
                <span className="inline-flex items-center px-3 rounded-l-md border-r bg-gray-50 text-gray-500 text-sm">
                    <FaSearch />
                </span>
                <input onChange={onSearch} value={search} type="text" className="pl-4 focus:outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Search..." />
            </div>
            <div className="grid gap-x-16 gap-y-16 grid-cols-3">
                { filtered && filtered.map(collection => <Collection id={collection.id} key={collection.id} name={collection.name} description={collection.description} privateCollection={collection.description} author={`${collection.author.first_name} ${collection.author.last_name}`}/> )}
            </div>
        </div>
    )
}

export default Collections;