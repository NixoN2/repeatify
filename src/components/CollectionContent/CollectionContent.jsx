import {useSelector} from "react-redux";
import {useCollection} from "./hooks/useCollection";
import {useHistory} from "react-router-dom";
import {useState} from "react";
import Card from "./Card";
const CollectionContent = () => {
    const [add, setAdd] = useState(false);
    const toggle = () => setAdd(!add);
    useCollection(window.location.href.split('/collection/')[1]);
    const {currentCollection: collection} = useSelector(state=>state.collections);
    const {user} = useSelector(state=>state.user);
    const history = useHistory();
    return (
        <div className="w-4/5 mt-32 mb-20 h-screen rounded-xl  bg-white flex justify-between">
            <div className="mx-auto mt-8">
                <p className="text-4xl text-carolina-blue text-center mb-8">{collection?.name}</p>
                <div className="grid gap-x-12 gap-y-12 grid-cols-3">
                    { collection && collection.cards && collection.cards.map(card => <Card id={card.id} key={card.id} name={card.name} material={card.material}/> )}
                </div>
            </div>
            <div className="w-1/4 rounded-r-xl bg-carolina-blue">
                <div className="mb-10 mt-8 flex justify-center">
                    <p className="text-xl text-white">Author:</p>
                    <p
                        onClick={() => history.push(`/profile/${collection?.author.id}`)}
                        className="text-xl ml-4 text-white hover:text-prussian-blue
                        transition duration-300 ease-in-out
                        cursor-pointer">{`${collection?.author.first_name} ${collection?.author.last_name}`}
                    </p>
                </div>
                {
                    user.id === collection?.author.id ?
                    <div className="flex justify-center items-center">
                        {
                            !add ? <button onClick={toggle} className="w-80 h-10 bg-white rounded-xl text-center text-carolina-blue text-xl">Add Editor</button>
                            : <div>
                                <input type="email" placeholder="Enter email: " className="pl-3 w-72 h-10 text-xl text-carolina-blue" />
                                <button onClick={toggle} className="h-10 ml-3 w-8 rounded-xl text-center text-carolina-blue bg-white text-xl">+</button>
                            </div>
                        }
                    </div> : null
                }
            </div>
        </div>
    )
}

export default CollectionContent;