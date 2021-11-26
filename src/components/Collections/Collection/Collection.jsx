const Collection = ({name, author, description, privateCollection}) => {
    return (
        privateCollection ? <div className="p-4 bg-unauthorized-bg-color hover:bg-prussian-blue cursor-pointer">
            <p className="text-2xl text-gray-100 mb-4">{name}</p>
            <p className="text-lg text-gray-100 mb-4">{description}</p>
            <p className="text-2xl text-gray-100 float-right">{author}</p>
        </div> : null
    )
}

export default Collection;