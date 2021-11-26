import Header from "../Header";
const AuthorizedLayout = ({children}) => {
    return (
        <div className="h-screen bg-unauthorized-bg-color overflow-x-hidden ">
            <Header />
            <div className="flex justify-center items-center">
                {children}
            </div>
        </div>
    )
}
export default AuthorizedLayout;