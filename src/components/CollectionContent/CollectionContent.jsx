import {useSelector} from "react-redux";
import {useCollection} from "./hooks/useCollection";
import {useHistory} from "react-router-dom";
import Card from "./Card";
const CollectionContent = () => {
    useCollection(window.location.href.split('/collection/')[1]);
    const {currentCollection: collection} = useSelector(state=>state.collections);
    const history = useHistory();
    return (
        <div className="w-3/6 mt-32 mb-20 h-screen rounded-xl py-8 px-12 bg-white">
            <p className="text-4xl text-carolina-blue text-center mb-4">{collection?.name}</p>
            <div className="mb-10 flex">
                <p className="text-2xl text-carolina-blue mr-4">Author:</p>
                <p
                    onClick={() => history.push(`/profile/${collection.author.id}`)}
                    className="text-2xl text-carolina-blue hover:text-prussian-blue
                    transition duration-300 ease-in-out
                    cursor-pointer">{`${collection?.author.first_name} ${collection?.author.last_name}`}
                </p>
            </div>
            <div className="grid gap-x-16 gap-y-16 grid-cols-3">
                { collection && collection.cards && collection.cards.map(card => <Card id={card.id} key={card.id} name={card.name} material={card.material}/> )}
            </div>
        </div>
    )
}

export default CollectionContent;