import { useEffect } from 'react';
import useSWR from 'swr';
import { useGlobalContext } from '../context/GlobalContextProvider';
import Fetcher from './Fetcher';
import { toast } from "react-toastify";

const CheckTokenValidation = () => {

    const { error } = useSWR(`/auth/checkSession`, Fetcher);
    const { authDispatch } = useGlobalContext();

    useEffect(() => {
        if (
            (error && error?.message.split(" ").includes("401")) ||
            (error && error?.message.split(" ").includes("403"))
        ) {
            authDispatch({
                type: "LOGOUT",
            });
            toast.error("Your session is expired! please login again!");
        }
    }, [error, authDispatch]);

    return null
}

export default CheckTokenValidation