const MenuLink = ({onClick, name,tag, registered, id,children}) => {
    const renderLink = (e) => {
        if ((registered && e.props['data-tag'] === "login") || (!registered && e.props['data-tag'] !== "logout")) {
            return null;
        }
        const allowedRoutes = registered ?
        ['/collections','/','/create',`/profile/${id}`] :
        ['/collections','/','/register'];
        return allowedRoutes.filter(item => e.props['data-name'] === item).length > 0 && e;
    }
    return renderLink(<li onClick={onClick} data-name={name} data-tag={tag} className="text-carolina-blue text-lg p-2 hover:bg-gray-100 w-full text-center cursor-pointer">{children}</li>)
}

export default MenuLink;