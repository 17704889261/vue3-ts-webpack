import request from '@/plugins/request'
import type { ResInstance } from '@/plugins/axios'
import http from '@/plugins/axios'

export interface Test1Res {
  id: string
  name: string
  age: number
  sex: boolean
  sex1: boolean
}

interface Test1ResInfo {
  testInfo: Test1Res[]
}

export const Demo1Fun = () => {
  // return http.get<string, Test1ResInfo>('http://10.130.7.185:3000/mock/348/apis/test')
  /** *
   * @type any是提供第一泛型参数
   * @type ResInstance<Test1ResInfo> 是覆盖axios原本返回的参数类型
   * @description 设置泛型参数的目的是帮助代码开发过程中，应用返回数据时提示各种不正确的使用方式
   * * */
  return http.get<any, ResInstance<Test1ResInfo>>('/mock/348/apis/test')
}

/** *
 * @type Test1ResInfo 是当前接口返回的data里的内容泛型定义
 * @description 设置泛型参数的目的是帮助代码开发过程中，应用返回数据时提示各种不正确的使用方式
 * * */
export const Demo2Fun = () => {
  return request.get<Test1ResInfo>('/mock/348/apis/test', {
    stopMessage: true
  })
}
