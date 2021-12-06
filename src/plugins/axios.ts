import axios from 'axios'
import { ElMessage } from 'element-plus'

const { serverUrl } = window

const service = axios.create({
  baseURL: serverUrl || '/',
  timeout: 1000 * 2
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      ElMessage.error('服务器错误！')
      return Promise.reject(response.data)
    }
    return response.data
  },
  error => {
    ElMessage.error(error.message)
    return error
  }
)

export default service
