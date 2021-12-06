import router from '../router/index'
import NProgress from './nprogress'

router.beforeEach((to: any, from: any, next: () => void) => {
  // to and from are both route objects. must call `next`.
  console.log(' 来自', from.fullPath, '页面')
  console.log(' 去往', to.fullPath, '页面')

  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})
