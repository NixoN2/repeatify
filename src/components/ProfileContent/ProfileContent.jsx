import Image from "./Image";
import Collection from "../Collections/Collection";
import { useSelector } from "react-redux";
import {useProfile} from "./hooks/useProfile";
const ProfileContent = () => {
    useProfile(window.location.href.split('/profile/')[1]);
    const {currentUser} = useSelector(state => state.user);
    const {collections} = useSelector(state=>state.collections);
    const filtered = collections && collections.filter(collection => collection.author.id === currentUser.id || !collection.privateCollection)
    return (
        <div className="w-3/6 mt-32 mb-20 h-screen rounded-xl py-8 px-12 bg-white">
            <p className="text-4xl text-carolina-blue text-center mb-10">Profile</p>
            <Image />
            <p className="text-center text-2xl text-carolina-blue mt-10 mb-4">{`${currentUser.first_name} ${currentUser.last_name}`}</p>
            <p className="text-center text-2xl text-carolina-blue mb-10">{currentUser.email}</p>
            <p className="text-center text-3xl text-carolina-blue mb-6">{`${currentUser.first_name}'s Collections`}</p>
            <div className="grid gap-x-16 gap-y-16 grid-cols-3">
                { filtered && filtered.map(collection => <Collection id={collection.id} key={collection.id} name={collection.name} description={collection.description} privateCollection={collection.description} author={`${collection.author.first_name} ${collection.author.last_name}`}/> )}
            </div>
        </div>
    )
}

export default ProfileContent;