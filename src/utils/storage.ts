export const setStorage = (key: string, val: string) => {
  window.localStorage.setItem(key, val)
}

export const getStorage = (key: string) => {
  return window.localStorage.getItem(key)
}
