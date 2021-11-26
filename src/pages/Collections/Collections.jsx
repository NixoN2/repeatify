import AuthorizedLayout from "../../components/AuthorizedLayout";
import Collections from "../../components/Collections";
const CollectionPage = () => {
    return (
        <AuthorizedLayout>
            <Collections />
        </AuthorizedLayout>
    )
}

export default CollectionPage;