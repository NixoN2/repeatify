import AuthorizedLayout from "../../components/AuthorizedLayout";
import CollectionContent from "../../components/CollectionContent/CollectionContent";
const Collection = () => {
    return (
        <AuthorizedLayout>
            <CollectionContent />
        </AuthorizedLayout>
    )
}

export default Collection;