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
  const { options } = useRouter()
  const menus = options.routes
  menus.map(item => {
    if (!item.children) {
      item.children = []
    }
    return item
  })
  return menus
}
