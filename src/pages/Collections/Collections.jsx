import AuthorizedLayout from "../../components/AuthorizedLayout";
import Collections from "../../components/Collections";
import {useAuth0Authorization} from "../../utils/hooks/useAuth0";
const CollectionPage = () => {
    useAuth0Authorization();
    return (
        <AuthorizedLayout>
            <Collections />
        </AuthorizedLayout>
    )
}

export default CollectionPage;