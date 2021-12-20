/* eslint-disable @typescript-eslint/no-shadow */
import type { ActionContext } from 'vuex'

export interface StateModule {
  // 定义该模块的state类型
  name: string
  token: string
}

export const state: StateModule = {
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
  login({ commit }: ActionContext<StateModule, any>) {
    // 目前没导出RootState,暂时先用any代替
    commit('setToken', 'token')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
