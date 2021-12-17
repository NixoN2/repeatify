import AuthorizedLayout from "../../components/AuthorizedLayout";
import CreateCollectionContent from "../../components/CreateCollectionContent";
import {useAuth0Authorization} from "../../utils/hooks/useAuth0";
const CreateCollection = () => {
    useAuth0Authorization();
    return (
        <AuthorizedLayout>
            <CreateCollectionContent />
        </AuthorizedLayout>
    )
}

export default CreateCollection;