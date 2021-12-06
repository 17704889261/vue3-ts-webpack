import http from '../plugins/axios'

export interface Test1Res {
  id: string
  name: string
  age: number
  sex: boolean
}

interface ResInfo {
  code: number
  msg: string
  data: any
}

interface Test1ResInfo extends ResInfo {
  data: {
    testInfo: Test1Res[]
  }
}

export const Demo1Fun = () => {
  // return http.get<string, Test1ResInfo>('http://10.130.7.185:3000/mock/348/apis/test')
  return http.get<string, Test1ResInfo>('/mock/348/apis/test')
}

export const Demo2Fun = () => {
  return http.get('/mock/348/apis/test')
}
