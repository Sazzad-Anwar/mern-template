import axiosInstance from './AxiosInstance';

const Fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default Fetcher;
