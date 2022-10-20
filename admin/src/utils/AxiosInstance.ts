import axios from 'axios';
import { Config } from '../shared/Config';
const axiosInstance = axios.create({ baseURL: Config.BaseUrl, withCredentials: true });
export default axiosInstance;
