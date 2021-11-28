import AuthorizedLayout from "../../components/AuthorizedLayout";
import CreateCollectionContent from "../../components/CreateCollectionContent";
const CreateCollection = () => {
    return (
        <AuthorizedLayout>
            <CreateCollectionContent />
        </AuthorizedLayout>
    )
}

export default CreateCollection;