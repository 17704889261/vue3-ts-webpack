import type { RouteRecordName, RouteRecordRaw, RouteMeta } from 'vue-router'
import { useRouter } from 'vue-router'

export const menu = () => {
  const { getRoutes } = useRouter()
  const menus = getRoutes()
  menus.map(node => ({ ...node }))

  return menus
}

interface Menu {
  name: RouteRecordName | undefined
  path: string
  meta: RouteMeta
  children: RouteRecordRaw[]
}

export function getMenus() {
  const { getRoutes } = useRouter()
  const menus = getRoutes()
  const resMenu: Menu[] = []

  menus.map(item => {
    const { name, path, meta, children } = item
    const resItem: Menu = {
      name,
      path,
      meta,
      children
    }
    const findItem = isSame(resMenu, path)
    if (findItem && findItem.children.length === 0) {
      findItem.children = resItem.children
    } else {
      resMenu.push(resItem)
    }
    return resItem
  })
  const childrenRouters: any = []
  findChildrenRouters(resMenu).map((val: any) => {
    val.children.map((item: any) => {
      childrenRouters.push(item)
      return item
    })
    return val
  })
  childrenRouters.map((item: any) => {
    const index = resMenu.findIndex(val => val.name === item.name)
    if (index > -1) {
      resMenu.splice(index, 1)
    }
    return item
  })
  return resMenu
}

function isSame(arr: any, path: any) {
  return arr.find((val: any) => val.path === path)
}
function findChildrenRouters(arr: any) {
  return arr.filter((val: any) => {
    return val.children.length > 0
  })
}
