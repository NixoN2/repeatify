import {useCollection} from "./hooks/useCollection";
import {useHistory} from "react-router-dom";
import { Icon } from '@iconify/react';
import  pencilLine from '@iconify-icons/ri/pencil-line';
import checkLine from '@iconify-icons/ri/check-line';
import closeLine from "@iconify-icons/ri/close-line";
import {useEditor} from "./hooks/useEditor";
import CreateCardForm from "../CreateCardForm";
import Card from "./Card";
const CollectionContent = () => {
    const {editors,search,onSearch,deleteEditor, addEditor} = useEditor();
    const {collection,canDelete,deleteCollection,add,edit,toggleEdit,toggle,id, isLoading} = useCollection(window.location.href.split('/collection/')[1]);
    const history = useHistory();
    return (
        <div className="w-4/5 mt-32 mb-20 rounded-xl min-h-screen bg-white flex justify-between">
            <div className="mx-auto mt-8 pb-10 w-3/5 px-8">
                {!isLoading ? <div>
                <p className="text-4xl text-carolina-blue text-center mb-2 flex justify-center items-center">
                    {collection?.name}
                    {
                        (id === collection?.author?.id || collection?.editors?.filter(({editor}) => editor?.id === id)?.length > 0) &&
                        <Icon onClick={toggleEdit} className="cursor-pointer ml-2 inline w-7 h-7" icon={edit ? checkLine : pencilLine } />
                    }
                </p>
                { edit && <CreateCardForm />}
                { collection?.cards?.length > 0 ?
                    <div className="mt-8 grid gap-x-16 gap-y-16 grid-cols-3">
                        {collection.cards.map(card => <Card id={card.id} key={card.id} name={card.name} material={card.material}/>)}
                    </div>
                    : <p className="text-3xl text-carolina-blue text-center">No cards added to the collection</p>
                }
                </div> :<div className="flex justify-center items-center">
                            <div style={{borderTopColor:"transparent"}}
                                className="w-12 h-12 border-4 border-carolina-blue border-solid rounded-full animate-spin">
                            </div>
                        </div>}
            </div>
            <div className="w-1/4 rounded-r-xl bg-carolina-blue">
                    {!isLoading ? <div className="mb-10 mt-8 flex justify-center">
                        <p className="text-xl text-white">Author:</p>
                        <p
                            onClick={() => history.push(`/profile/${collection?.author.auth0Id}`)}
                            className="text-xl ml-4 text-white hover:text-prussian-blue
                            transition duration-300 ease-in-out
                            cursor-pointer">{`${collection?.author?.first_name} ${collection?.author?.last_name}`}
                        </p>
                    </div> : <div className="animate-pulse mt-8 rounded-md flex justify-center bg-gray-200 w-64 h-7 mx-auto"></div>}
                {
                    id === collection?.author?.auth0Id ?
                    <div className="flex justify-center items-center">
                        {
                            !add ? <button onClick={toggle} className="w-80 h-10 bg-white rounded-xl text-center text-carolina-blue text-xl">Add Editor</button>
                            : <div>
                                <input value={search} onChange={onSearch} type="email" placeholder="Enter email: " className="pl-3 w-72 h-10 text-xl text-carolina-blue" />
                                <button onClick={async () => {toggle();await addEditor()}} className="h-10 ml-3 w-8 rounded-xl text-center text-carolina-blue bg-white text-xl">+</button>
                            </div>
                        }
                    </div> : null
                }
                {
                    editors?.length > 0 || !isLoading ?
                        <div className="mt-4">
                            <p className="text-white text-3xl text-center">
                                Editors
                            </p>
                            {editors?.map(editor => {
                            return <div className="flex justify-center items-center">
                                <p
                                    key={editor?.editor?.auth0Id}
                                    onClick={()=>{history.push(`/profile/${editor?.editor?.auth0Id}`)}}
                                    className="text-2xl text-white hover:text-prussian-blue
                                    transition duration-300 ease-in-out
                                    cursor-pointer text-center">
                                    {editor?.editor?.first_name} {editor?.editor?.last_name}
                                </p>
                                {canDelete && <Icon key={editor?.editor?.first_name+editor?.editor?.auth0Id} className="text-white hover:text-prussian-blue transition duration-300 ease-in-out cursor-pointer ml-2 text-2xl font-black"
                                onClick={()=>deleteEditor(editor?.editor?.auth0Id)} icon={closeLine} /> }
                            </div>})}
                        </div> : null
                }
                {canDelete && <div className="flex justify-center items-center mt-16">
                    <button onClick={deleteCollection} className="p-3 w-40 bg-red-500 hover:bg-red-900 transition duration-300 ease-in-out cursor-pointer text-white rounded-xl mb-4">Delete</button>
                </div> }
            </div>
        </div>
    )
}

export default CollectionContent;