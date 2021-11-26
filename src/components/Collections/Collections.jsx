import {useCollections} from "./hooks/useCollections";
import Collection from "./Collection";
import {useSelector} from "react-redux";
const Collections = () => {
    useCollections();
    const {collections} = useSelector(state=>state.collections);
    return (
        <div className="w-3/5 mt-32 min-h-screen mb-20 rounded-xl py-8 px-12 bg-white">
            <p className="text-center text-4xl text-carolina-blue mb-14">Collections</p>
            <div className="grid gap-x-16 gap-y-16 grid-cols-3">
                { collections && collections.map(collection => <Collection key={collection.id} name={collection.name} description={collection.description} privateCollection={collection.description} author={`${collection.author.first_name} ${collection.author.last_name}`}/> )}
            </div>
        </div>
    )
}

export default Collections;