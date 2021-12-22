import { Icon } from '@iconify/react';
import  pencilLine from '@iconify-icons/ri/pencil-line';
import checkLine from '@iconify-icons/ri/check-line';
import {useCreate} from "./hooks/useCreate";
import classnames from "classnames";
import Card from "../CollectionContent/Card";
import CreateCardForm from "../CreateCardForm";

const CreateCollectionContent = () => {
    const {
        name,
        change,
        toggle,
        togglePrivate,
        onNameChange,
        created,
        saveCollection,
        cards
    } = useCreate();
    return (
        <div className="w-3/6 mt-32 mb-20 h-screen rounded-xl py-8 px-12 bg-white">
            <p className="text-4xl text-carolina-blue text-center mb-16">Create your collection</p>

            {!created && <div>
                <p className="text-2xl text-carolina-blue mb-6">Give your collection a name:</p>
                <div className="mb-2 flex items-center">
                    <input className={classnames({"text-gray-500": !change},"w-2/5 h-10 pl-4 border-2 rounded-md border-carolina-blue")}
                        value={name} onChange={onNameChange} type="text"
                        placeholder="Enter collection's name:"
                        disabled={!change}
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <input onChange={togglePrivate} className="mr-2 w-4 h-4 cursor-pointer" type="checkbox" />
                    <p className="text-carolina-blue">Private Collection</p>
                </div>
            </div>
            }
            { !created && <button onClick={saveCollection} className="p-3 w-40 bg-carolina-blue hover:bg-prussian-blue text-gray-100 rounded-xl mb-4">Save</button>}
            {
                created && <CreateCardForm />
            }
            {cards?.length > 0 && <p className="text-center text-4xl text-carolina-blue mt-2 mb-6">Cards</p>}
            <div className="grid gap-x-16 gap-y-16 mb-10 grid-cols-3">
                { cards && cards.map(card => <Card id={card.id} key={card.id} name={card.name} material={card.material}/> )}
            </div>
        </div>
    )
}
export default CreateCollectionContent;