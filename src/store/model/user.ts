/* eslint-disable @typescript-eslint/no-shadow */
import type { ActionContext } from 'vuex'
import { setStorage, getStorage } from '@/utils/storage'

export interface UserStateModule {
  // 定义该模块的state类型
  name: string
  token: string
}

export const state: UserStateModule = {
  name: '',
  token: ''
}

export const mutations = {
  setName(state: { name: string }, params: string) {
    state.name = params
  },
  setToken(state: { token: string }, params: string) {
    state.token = params
  }
}

export const actions = {
  login({ commit }: ActionContext<UserStateModule, any>, params: any) {
    setStorage('form', JSON.stringify(params))
    commit('setName', params.name)
    commit('setToken', 'token')
  }
}

export const getters = {
  getName(state: { name: string }) {
    return state.name
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
