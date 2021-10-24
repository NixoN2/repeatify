const UnauthorizedLayout = ({children}) => {
    return (
        <div className="w-screen h-screen bg-unauthorized-bg-color flex justify-center items-center">
            {children}
        </div>
    )
}
export default UnauthorizedLayout;