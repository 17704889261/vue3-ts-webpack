import { createStore } from 'vuex'

import UserModel from './model/user'
import SettingModel from './model/setting'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    UserModel,
    SettingModel
  }
})
