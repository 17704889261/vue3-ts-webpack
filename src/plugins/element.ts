// import Elementui from 'element-plus'
import {
  ElInput,
  ElCard,
  ElForm,
  ElColorPicker,
  ElAlert,
  ElMessage,
  ElLoading,
  ElScrollbar,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElDrawer,
  ElDivider
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'

const components = [
  ElInput,
  ElCard,
  ElForm,
  ElColorPicker,
  ElAlert,
  ElMessage,
  ElLoading,
  ElScrollbar,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElDrawer,
  ElDivider
]

export default (app: any) => {
  // app.use(ElButton)
  // app.use(Elementui, {
  //   local: lang
  // })
  components.forEach(val => {
    app.use(val)
  })

  app.config.globalProperties.$ELEMENT = {
    // options
    size: 'small',
    local: lang,
    zIndex: 4000
  }
}
