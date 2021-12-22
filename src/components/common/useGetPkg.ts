// 声明一下全局变量： APP_PKG
declare global {
  const APP_PKG: {
    pkg: {
      name: string
      version: string
      dependencies: Record<string, string>
      devDependencies: Record<string, string>
    }
  }
}

const packages = APP_PKG.pkg
console.log(' packages =======> ', packages)

export function useGetDependencies() {
  const { dependencies, devDependencies } = packages
  return { dependencies, devDependencies }
}

export function useGetVersion() {
  const { version } = packages
  return version
}
