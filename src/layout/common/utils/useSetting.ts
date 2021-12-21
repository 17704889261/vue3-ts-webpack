import { computed } from 'vue'
import { useStore } from 'vuex'

export const useCollapse = () => {
  const store = useStore()
  const isCollapse = computed({
    get: () => {
      return store.getters['SettingModel/getCollapse']
    },
    set: val => {
      store.commit('SettingModel/setCollapse', val)
    }
  })
  return isCollapse
}
export const useThemeChange = () => {
  const store = useStore()
  const isCollapse = computed({
    get: () => {
      return store.getters['SettingModel/getCollapse']
    },
    set: val => {
      store.commit('SettingModel/setCollapse', val)
    }
  })
  return isCollapse
}
