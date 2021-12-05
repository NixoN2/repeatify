import {useCreateCard} from "./hooks/useCreateCard";
const CreateCardForm = ({className}) => {
    const  {name,material,addCard,fieldOnChange} = useCreateCard();
    return (
        <div className={className}>
            <p className="text-2xl text-carolina-blue mb-6">Create new card:</p>
            <p className="text-xl text-carolina-blue mb-2">Name:</p>
            <input
                onChange={fieldOnChange}
                value={name}
                name="name"
                className="w-2/5 h-10 pl-4 border-2 rounded-md border-carolina-blue mb-4"
                placeholder="Enter card's name:"
            />
            <p className="text-xl text-carolina-blue mb-2">Material:</p>
            <textarea
                onChange={fieldOnChange}
                value={material}
                name="material"
                className="block w-3/5 mb-3 px-4 h-20 border-2 rounded-md border-carolina-blue"
            />
            <button onClick={addCard} className="p-3 w-40 bg-carolina-blue hover:bg-prussian-blue text-gray-100 rounded-xl">Add card</button>
        </div>
    )
}

export default CreateCardForm;