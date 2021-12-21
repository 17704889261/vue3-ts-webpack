import store from '@/store/index'
import router from '@/router/index'
import { getStorage } from '@/utils/storage'
import NProgress from './nprogress'

router.beforeEach((to: any, from: any, next: () => void) => {
  // to and from are both route objects. must call `next`.
  console.log(' 来自', from.fullPath, '页面')
  console.log(' 去往', to.fullPath, '页面')

  NProgress.start()

  if (to.path.indexOf('/login') > -1) {
    next()
    return
  }

  const form = getStorage('form')
  if (form) {
    const { user } = JSON.parse(form)
    store.commit('UserModel/setName', user)
  } else {
    router.push('/login')
    return
  }

  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})
