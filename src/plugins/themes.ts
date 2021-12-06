const DEFAULT_PRIMARY_COLOR = '#409EFF'
const GOBAL_PRIMARY_NAME = '--el-color-primary'
const GOBAL_STORGE_THEMES_NAME = 'gobal_themes'

export class Themes {
  elDom = document.querySelector('body') as HTMLBodyElement

  constructor(dom?: HTMLBodyElement) {
    if (dom) {
      this.elDom = dom
    }
    this.init()
  }

  init() {
    const currThemes = this.getCurrentTheme()
    this.setCurrentTheme(currThemes)
    return currThemes
  }

  getCurrentTheme() {
    const bodyDom = this.elDom
    const storgeThemes = this.getStorgeThemes()
    if (storgeThemes) return storgeThemes
    return window.getComputedStyle(bodyDom).getPropertyValue(GOBAL_PRIMARY_NAME)
  }

  setCurrentTheme(val = DEFAULT_PRIMARY_COLOR) {
    const bodyDom = this.elDom
    bodyDom.style.setProperty(GOBAL_PRIMARY_NAME, val)

    const storgeThemes = this.getStorgeThemes()
    if (storgeThemes !== val) {
      this.setStorgeThemes(val)
    }
    console.log(' 设置主题色后： ', this.getCurrentTheme())
  }

  private getStorgeThemes = () => {
    return window.localStorage.getItem(GOBAL_STORGE_THEMES_NAME)
  }

  private setStorgeThemes = (val = DEFAULT_PRIMARY_COLOR) => {
    window.localStorage.setItem(GOBAL_STORGE_THEMES_NAME, val)
  }
}

export function initThemes() {
  const bodyDom = document.querySelector('body') as HTMLBodyElement
  const themeIntance = new Themes(bodyDom)
  themeIntance.init()
}
