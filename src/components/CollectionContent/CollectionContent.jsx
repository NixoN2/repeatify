import {useSelector} from "react-redux";
import {useCollection} from "./hooks/useCollection";
import {useHistory} from "react-router-dom";
import { Icon } from '@iconify/react';
import  pencilLine from '@iconify-icons/ri/pencil-line';
import checkLine from '@iconify-icons/ri/check-line';
import {useState} from "react";
import {useEditor} from "./hooks/useEditor";
import CreateCardForm from "../CreateCardForm";
import Card from "./Card";
const CollectionContent = () => {
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const {search,onSearch, addEditor} = useEditor();
    const toggleEdit = () => setEdit(!edit);
    const toggle = () => {
        setAdd(!add);
    }
    const {collection} = useCollection(window.location.href.split('/collection/')[1]);
    const {user} = useSelector(state=>state.user);
    const history = useHistory();
    return (
        <div className="w-4/5 mt-32 mb-20 rounded-xl  bg-white flex justify-between">
            <div className="mx-auto mt-8 pb-10">
                <p className="text-4xl text-carolina-blue text-center mb-2 flex justify-center items-center">
                    {collection?.name}
                    <Icon onClick={toggleEdit} className="cursor-pointer ml-2 inline w-7 h-7" icon={edit ? checkLine : pencilLine } />
                </p>
                { edit && <CreateCardForm />}
                    { collection?.cards.length > 0 ?
                        <div className="mt-8 grid gap-x-12 gap-y-12 grid-cols-3">
                            {collection.cards.map(card => <Card id={card.id} key={card.id} name={card.name} material={card.material}/>)}
                        </div>
                        : <p className="text-3xl text-carolina-blue text-center">No cards added to the collection</p>
                    }
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
                                <input value={search} onChange={onSearch} type="email" placeholder="Enter email: " className="pl-3 w-72 h-10 text-xl text-carolina-blue" />
                                <button onClick={() => {toggle(); addEditor()}} className="h-10 ml-3 w-8 rounded-xl text-center text-carolina-blue bg-white text-xl">+</button>
                            </div>
                        }
                    </div> : null
                }
            </div>
        </div>
    )
}

export default CollectionContent;