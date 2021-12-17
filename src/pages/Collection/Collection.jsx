import AuthorizedLayout from "../../components/AuthorizedLayout";
import CollectionContent from "../../components/CollectionContent/CollectionContent";
import {useAuth0Authorization} from "../../utils/hooks/useAuth0";
const Collection = () => {
    useAuth0Authorization();
    return (
        <AuthorizedLayout>
            <CollectionContent />
        </AuthorizedLayout>
    )
}

export default Collection;