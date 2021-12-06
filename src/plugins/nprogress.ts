import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 这里可以修改默认主题色，目前只修改的primary的值，还需要继续补充
import '@/assets/styles/nprogress.scss'

NProgress.configure({ minimum: 0.4 }) // NProgress Configuration

export default NProgress
