export function getToken() {
  return window.localStorage.getItem('token')
}

export function setToken(val: string) {
  window.localStorage.setItem('token', val)
  return val
}
