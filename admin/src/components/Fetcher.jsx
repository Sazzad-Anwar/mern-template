import axiosInstance from "./AxiosInstance";

const Fetcher = (url) => axiosInstance.get(url).then((res) => res.data);
export default Fetcher;
