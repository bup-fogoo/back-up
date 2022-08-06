import request from '../utils/request'

// 用户注册
const register = ({name, emial, password}) => {
  return request.post('auth/register', {name, emial, password})
}

// 获取用户信息
const info = () => {
  return request.get('auth/info')
}
export default {
  register,
  info
}
