import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "../config";
const AuthProvider = ({ children }) => {
    const {domain, clientId, audience} = getConfig();
    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            audience={audience}
            >
            {children}
        </Auth0Provider>
    );
};

export default AuthProvider;
