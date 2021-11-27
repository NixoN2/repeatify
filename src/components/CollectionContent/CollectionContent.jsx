import {useSelector} from "react-redux";
import {useCollection} from "./hooks/useCollection";
import Card from "./Card";
const CollectionContent = () => {
    useCollection(window.location.href.split('/collection/')[1]);
    const {currentCollection: collection} = useSelector(state=>state.collections);
    return (
        <div className="w-3/6 mt-32 mb-20 h-screen rounded-xl py-8 px-12 bg-white">
            <p className="text-4xl text-carolina-blue text-center mb-10">{collection?.name}</p>
            <div className="grid gap-x-16 gap-y-16 grid-cols-3">
                { collection && collection.cards && collection.cards.map(card => <Card id={card.id} key={card.id} name={card.name} material={card.material}/> )}
            </div>
        </div>
    )
}

export default CollectionContent;