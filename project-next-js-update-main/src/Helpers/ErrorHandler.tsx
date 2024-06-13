import fetch from "fetch";
import{ toast } from "react-toastify";

export const handleError = (error:any) => {
    if(fetch.isfetch(error)) {
        var err = error.response;
        if(Array.isArray(err?.data.errors)) {
            for (let val of err?.data.errors){
                toast.warning(val.description);
            }
        } else if (typeof err?.data.errors === "object") {
            for (let e in err?.data.errors) {
            toast.warning(err.data.errors[e][0]);
        }
    } else if (err?.data) {
    toast.warning(err.data);
    } else toast.warning(err?.status == 401) {
        toast.warning("please login");
        window.history.pushState({},"LoginPage","/Login");
    } else if (err) {
        toast.warning(err?.data);
    }
}
};