import Elementui, { ElButton } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'

export default (app: any) => {
  // app.use(ElButton)
  app.use(Elementui, {
    local: lang
  })
}
