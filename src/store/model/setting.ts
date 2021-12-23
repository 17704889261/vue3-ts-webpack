/* eslint-disable @typescript-eslint/no-shadow */
import type { Module } from 'vuex'

export interface SettingStateModule {
  // 定义该模块的state类型
  isCollapse: boolean // 侧导航是否展开： false-展开 true-关闭
}

const SettingModel: Module<SettingStateModule, any> = {
  namespaced: true,
  state: {
    isCollapse: false
  },
  getters: {
    getCollapse: (state): boolean => {
      return state.isCollapse
    }
  },
  mutations: {
    setCollapse(state, params: boolean) {
      state.isCollapse = params
    }
  },
  actions: {}
}

export default SettingModel
