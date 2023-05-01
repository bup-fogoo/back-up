import request from '../utils/request'

// 获取用户信息
const getProfile = (params) => {
    return request.get('api/v1/profile', {params})
}
export default {
    getProfile
}
