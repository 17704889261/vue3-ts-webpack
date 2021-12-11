import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { ElMessage } from 'element-plus'

export interface RequestConfig extends AxiosRequestConfig {
  stopMessage?: boolean
}
export interface ResInstance<T> {
  code: number
  msg: string
  data: T
}

const { serverUrl } = window

/** *
 * @params error: any 错误信息对象
 * @params errorHttpStatus: boolean 是否是http拦截状态错误
 * @params code: number 错误码
 * @params msg: any 错误信息
 * * */
function errData(error: any) {
  const { errorHttpStatus } = error
  if (errorHttpStatus) {
    const { code, msg } = error
    return {
      code,
      msg
    }
  }
  return {
    code: -500,
    msg: error.message
  }
}

/* 接口超时时长，单位：秒 */
const TIMEOUT_NUMBER = 2

const service = axios.create({
  baseURL: serverUrl || '/',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 1000 * TIMEOUT_NUMBER,
  timeoutErrorMessage: `网络请求超时【限时${TIMEOUT_NUMBER}秒】`
})

// request拦截器
service.interceptors.request.use(
  (config: RequestConfig) => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const resData = response.data

    return resData
  },
  error => {
    /** *
     * @params stopMessage: boolean 是否阻止全局消息提示；default：false 默认不阻止
     * * */

    const { stopMessage } = error.config
    // 获取 错误码 和 错误信息
    const status = error.code || error.response.status
    const statusText = error.message || error.response.statusText

    if (!stopMessage) ElMessage.error(`【${status}】服务器报错: ${statusText}！`)
    return Promise.reject(
      errData({
        errorHttpStatus: true,
        code: status,
        msg: `服务器报错: ${statusText}！`
      })
    )
  }
)

export default service
