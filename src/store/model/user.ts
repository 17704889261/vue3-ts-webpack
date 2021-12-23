/* eslint-disable @typescript-eslint/no-shadow */
import type { ActionContext, Module } from 'vuex'
import { setStorage } from '@/utils/storage'

/* eslint-disable @typescript-eslint/no-shadow */

export interface UserStateModule {
  // 定义该模块的state类型
  name: string
  token: string
}

const SettingModel: Module<UserStateModule, any> = {
  namespaced: true,
  state: {
    name: '',
    token: ''
  },
  getters: {
    getName: state => {
      return state.name
    }
  },
  mutations: {
    setName(state, params: string) {
      state.name = params
    },
    setToken(state, params: string) {
      state.token = params
    }
  },
  actions: {
    login({ commit }, params: any): void {
      setStorage('form', JSON.stringify(params))
      commit('setName', params.name)
      commit('setToken', 'token')
    }
  }
}

export default SettingModel
