import axios from "axios";
import { ToastAlert } from "./toast";

export const AxiosHTTP = (method, url, message, data) => {
    axios({
        method: method,
        url: url,
        data: data
    });
    ToastAlert('success', message)
    setTimeout(() => {
        window.location.replace('/home');
    }, 5000);
}