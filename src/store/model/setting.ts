/* eslint-disable @typescript-eslint/no-shadow */
export interface SettingStateModule {
  // 定义该模块的state类型
  isCollapse: boolean // 侧导航是否展开： false-展开 true-关闭
}

export const state: SettingStateModule = {
  isCollapse: false
}

export const mutations = {
  setCollapse(state: { isCollapse: boolean }, params: boolean) {
    state.isCollapse = params
  }
}

export const actions = {}

export const getters = {
  getCollapse(state: { isCollapse: boolean }) {
    return state.isCollapse
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
