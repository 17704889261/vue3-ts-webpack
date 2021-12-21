declare global {
  const APP_PKG: {
    pkg: {
      name: string
      version: string
      dependencies: Recordable<string>
      devDependencies: Recordable<string>
    }
  }
}

declare type Recordable<T = any> = Record<string, T>
