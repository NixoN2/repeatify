import AuthorizedLayout from "../../components/AuthorizedLayout";
import ProfileContent from "../../components/ProfileContent";
const Profile = () => {
    return (
        <AuthorizedLayout>
            <ProfileContent />
        </AuthorizedLayout>
    )
}

export default Profile;