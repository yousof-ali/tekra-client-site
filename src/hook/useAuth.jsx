import { AuthProvider } from "@/contextApi/authContext"
import { useContext } from "react"


const useAuth = () =>  {
    const auth = useContext(AuthProvider);
    return auth;
};

export default useAuth;