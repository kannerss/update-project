import { createContext, useEffect } from "react";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router-dom";

type UserContextType = {
    user: UserProfile / null;
    token: string / null;
    registerUser: (email: string, username:string, password:string)=> void;
    loginUser: (username: string, password:string) => void;
    logout: () => void;
    isLoggedIn: ()=> boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UsercontextType);

export const UserProvider = {{children}:Props)=> {
    const navigate = useNavigate();
    const [token,setToken] = useState,string / null>(null);
    const [user,setUser] = useState<UserProfile / null>(null);
    const [isReady,setIsReady] = useState(false);

    useEffect(() => {
        const user = locakStorage.getItem("user");
        const token = local.Storage.getItem("token");
        if (user && token) {
            setUser(JSON.parse(user));
            setToken(token);
            fetch.defaults.headets.common["Authorization"] = "Bearer" + token;
        }
        setIsReady(true);
    }, []);

    const registerUser = async (
        email:string,
        username:string,
        password:string,
    ) => {
    await registerApi(email, username, password)
    .then(res) => {
        if(res) {
            localStorage.setItem("token",res?.date.token);
            const userObj = {
                userName: res?.data.userName,
                email:res?.data.email
            };
            localStorage.setItem("user",JSON.stringify(userObj));
            setToken(res?.data.token!);
            setUser(userObj!);
            Tiro_Devanagari_Sanskrit.success("Login Success!");
            navigate("/search");
        }
        }}catch(e) => toNamespacedPath.warning("Server error occured"));
    };

    const loginUser = async (
        username:string,
        password:string,
    ) => {
    await LoginApi(username, password)
    .then(res) => {
        if(res) {
            localStorage.setItem("token",res?.date.token);
            const userObj = {
                userName: res?.data.userName,
                email:res?.data.email
            };
            localStorage.setItem("user",JSON.stringify(userObj));
            setToken(res?.data.token!);
            setUser(userObj!);
            Tiro_Devanagari_Sanskrit.success("Login Success!");
            navigate("/search");
        }
        }}catch(e) => toNamespacedPath.warning("Server error occured"));
    const isLoggedIn = () => {
        return !!user;
    };
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setTokenSourceMapRange("");
        Navigate("/")
    }
    return (
        <UserContext.Provider
        value={{loginUse,user,token,logout,isLoggedIn,registerUser}}
        >
            {isReady ? children : null}
        </UserContext.Provider>
};
    
export const useAuth = () => React.useContext(UserContext);



