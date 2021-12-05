import {useCollections} from "./hooks/useCollections";
import { FaSearch } from "react-icons/fa";
import Collection from "./Collection";
const Collections = () => {
    const {search,onSearch,filtered,collections} = useCollections();
    return (
        <div className="w-3/5 mt-32 min-h-screen mb-20 rounded-xl py-8 px-12 bg-white">
            <p className="text-center text-4xl text-carolina-blue mb-4">Collections</p>
            <div className="mb-10 mx-auto flex rounded-md shadow-sm w-3/6 h-10 border-2">
                <span className="inline-flex items-center px-3 rounded-l-md border-r bg-gray-50 text-gray-500 text-sm">
                    <FaSearch />
                </span>
                <input onChange={onSearch} value={search} type="text" className="pl-4 focus:outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Search..." />
            </div>
                {
                    collections !== undefined && collections?.length > 0 ?
                        filtered?.length > 0 ?
                            <div className="grid gap-x-16 gap-y-16 grid-cols-3">
                                {
                                    filtered.map(collection =>
                                    <Collection
                                        id={collection.id}
                                        key={collection.id}
                                        name={collection.name}
                                        description={collection.description}
                                        privateCollection={collection.private}
                                        author={`${collection.author.first_name} ${collection.author.last_name}`}
                                        collection={collection}
                                    />)
                                }
                            </div>
                        : <p className="text-center text-2xl text-carolina-blue">No collections found</p>
                    : <p className="text-center text-2xl text-carolina-blue">No collections</p>
                }
        </div>
    )
}

export default Collections;