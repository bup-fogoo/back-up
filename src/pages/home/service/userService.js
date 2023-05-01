import request from '../utils/request'

// 用户注册
const register = ({username, password}) => {
    return request.post('api/v1/auth/register', {username, password})
}

// 用户注册
const login = ({username, password}) => {
    return request.post('api/v1/auth/login', {username, password})
}

// 获取用户信息
const info = () => {
    return request.get('api/v1/auth/info')
}
export default {
    register,
    login,
    info
}
