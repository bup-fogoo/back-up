import axios from "axios";
import storageService from '@/pages/home/service/storageService'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 1000 * 5,
    headers: {Authorization: `Bearer ${storageService.get(storageService.USER_TOKEN)}`}
});
export default service
// 目前用不到，整合api接口头部信息的，还有一个配置环境变量
