import AuthorizedLayout from "../../components/AuthorizedLayout";
import ProfileContent from "../../components/ProfileContent";
import {useAuth0Authorization} from "../../utils/hooks/useAuth0";
const Profile = () => {
    useAuth0Authorization();
    return (
        <AuthorizedLayout>
            <ProfileContent />
        </AuthorizedLayout>
    )
}

export default Profile;