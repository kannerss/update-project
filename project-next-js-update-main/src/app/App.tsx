import { Outlet } from "react-router";
import Navbar  from "@/components/Navbar";
import "react-toastify/dist/reactToastify";
import "./App.css";
import { ToastContainer } from "react-toastify"
import { UserProvider } from "@/Context/useAuth";

function App() {
    return (
        <>
        <UserProvider>
        <Navbar />
        <Outlet />
        <ToastContainer />
        </UserProvider>
        </>
    );
}

export default App;