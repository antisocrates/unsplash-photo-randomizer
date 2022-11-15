import {toast} from "react-toastify";

const notifyError = (msg: string = "An unknown error has occurred!") => toast.error(msg, {
    position: "top-right",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

const notifyInfo = (msg: string) => toast.info(msg, {
    position: "top-right",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

export {notifyError, notifyInfo};