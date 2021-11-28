import { Icon } from '@iconify/react';
import  pencilLine from '@iconify-icons/ri/pencil-line';
import checkLine from '@iconify-icons/ri/check-line';
import {useState} from "react";
import classnames from "classnames";
import Card from "../CollectionContent/Card";
const CreateCollectionContent = () => {
    const [name, setName] = useState("");
    const [cards, setCards] = useState([]);
    const [cname, setCName] = useState("");
    const [cmaterial, setCMaterial] = useState("");
    const onCNameChange = (e) => setCName(e.target.value);
    const onCMaterialChange = (e) => setCMaterial(e.target.value);
    const addCard = () => {
        cname && cmaterial && setCards([...cards, {name: cname, material: cmaterial, id: cards.length}]);
        setCName("");
        setCMaterial("");
    }
    const [change, setChange] = useState(true);
    const toggle = () => setChange(!change);
    const onNameChange = (e) => change && setName(e.target.value);
    return (
        <div className="w-3/6 mt-32 mb-20 h-screen rounded-xl py-8 px-12 bg-white">
            <p className="text-4xl text-carolina-blue text-center mb-16">Create your collection</p>
            <p className="text-2xl text-carolina-blue mb-6">Give your collection a name:</p>
            <div className="mb-6 flex items-center">
                <input className={classnames({"text-gray-500": !change},"w-2/5 h-10 pl-4 border-2 rounded-md border-carolina-blue")}
                    value={name} onChange={onNameChange} type="text"
                    placeholder="Enter collection's name:"
                    disabled={!change}
                />
                {name ? change ?
                    <Icon className="text-2xl ml-3 text-carolina-blue cursor-pointer" onClick={toggle} icon={checkLine} /> :
                    <Icon className="text-2xl ml-3 text-carolina-blue cursor-pointer" onClick={toggle} icon={pencilLine}/> :null }
            </div>
            <p className="text-2xl text-carolina-blue mb-6">Create new card:</p>
            <p className="text-xl text-carolina-blue mb-2">Name:</p>
            <input onChange={onCNameChange} value={cname} className="w-2/5 h-10 pl-4 border-2 rounded-md border-carolina-blue mb-4" placeholder="Enter card's name:"/>
            <p className="text-xl text-carolina-blue mb-2">Material:</p>
            <textarea onChange={onCMaterialChange} value={cmaterial} className="block w-3/5 mb-3 px-4 h-20 border-2 rounded-md border-carolina-blue"/>
            <button onClick={addCard} className="p-3 w-40 bg-carolina-blue hover:bg-prussian-blue text-gray-100 rounded-xl">Add card</button>
            {cards.length > 0 && <p className="text-center text-4xl text-carolina-blue mt-2 mb-6">Cards</p>}
            <div className="grid gap-x-16 gap-y-16 mb-10 grid-cols-3">
                { cards && cards.map(card => <Card id={card.id} key={card.id} name={card.name} material={card.material}/> )}
            </div>
            <div className="flex justify-center">
                <button className="p-3 w-40 bg-carolina-blue hover:bg-prussian-blue text-gray-100 rounded-xl">Save</button>
            </div>
        </div>
    )
}
export default CreateCollectionContent;