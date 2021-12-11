import type { RequestConfig, ResInstance } from './axios'
import AxiosInstance from './axios'

function thenFun(res: any, resolve: any) {
  const { code } = res
  console.log(' request.ts thenFun =====>', res)
  if (code === 1000) {
    resolve({ res: true, ...res })
    return
  }
  resolve({ res: false, ...res })
}

function catchFun(err: any, resolve: any) {
  resolve({ res: false, ...err })
}

export interface ResInfo<T> extends ResInstance<T> {
  res: boolean
}

class RequestInstance {
  instance

  constructor() {
    this.instance = AxiosInstance
  }

  get<T = any>(url: string, config?: RequestConfig) {
    return new Promise<ResInfo<T>>(resolve => {
      this.instance
        .get<T>(url, config)
        .then(res => thenFun(res, resolve))
        .catch(err => catchFun(err, resolve))
    })
  }

  post<T = any>(url: string, params: any, config?: RequestConfig) {
    return new Promise<ResInfo<T>>((resolve, reject) => {
      this.instance
        .post<T>(url, params, config)
        .then(res => thenFun(res, resolve))
        .catch(err => catchFun(err, resolve))
    })
  }
}

const request = new RequestInstance()
export default request
