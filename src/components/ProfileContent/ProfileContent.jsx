import Image from "./Image";
import Collection from "../Collections/Collection";
import {useProfile} from "./hooks/useProfile";
const ProfileContent = () => {
    const {animal, color, picture,first_name, last_name, email, collections,isLoading} = useProfile(window.location.href.split('/profile/')[1]);
    return (
        <div className="w-3/6 mt-32 mb-20 h-screen rounded-xl py-8 px-12 bg-white">
            <p className="text-4xl text-carolina-blue text-center mb-10">Profile</p>
            {
                !isLoading ?
                <div>
                    <img className="mx-auto rounded-full w-32 h-32" src={picture} alt="profile" />
                    {/* <Image color={color} animal={animal}/> */}
                    <p className="text-center text-2xl text-carolina-blue mt-10 mb-4">{`${first_name} ${last_name}`}</p>
                    <p className="text-center text-2xl text-carolina-blue mb-10">{email}</p>
                    <p className="text-center text-3xl text-carolina-blue mb-6">{`${first_name}'s Collections`}</p>
                    <div>
                        { collections !== undefined && collections?.length > 0 ?

                            <div className="grid gap-x-16 gap-y-16 grid-cols-3">{collections.map(collection =>
                                <Collection
                                    id={collection?.id}
                                    key={collection?.id}
                                    name={collection?.name}
                                    description={collection?.description}
                                    privateCollection={collection?.description}
                                    author={`${collection?.author?.first_name} ${collection?.author?.last_name}`}
                                /> )}</div> : <p className="text-center text-3xl text-carolina-blue">No collections</p>}
                    </div>
                </div> :
                <div className="flex justify-center items-center">
                    <div style={{borderTopColor:"transparent"}}
                        className="w-12 h-12 border-4 border-carolina-blue border-solid rounded-full animate-spin">
                    </div>
                </div>
            }

        </div>
    )
}

export default ProfileContent;