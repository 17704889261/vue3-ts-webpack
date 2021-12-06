/**
 * @desc 函数防抖
 * @param func 函数
 * @param waitTime 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表 不立即执行
 */
export const debounce = (func: () => void, waitTime: number, immediate: boolean): void => {
  let timeout: any
  if (timeout) clearTimeout(timeout)
  if (immediate) {
    const callNow = !timeout
    timeout = setTimeout(() => {
      timeout = null
    }, waitTime)
    if (callNow) func()
  } else {
    timeout = setTimeout(() => {
      func()
    }, waitTime)
  }
}

/**
 * @desc 函数节流
 * @param func 函数
 * @param waitTime 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 *
 * @备注 时间戳版和定时器版的节流函数的区别就是，时间戳版的函数触发是在时间段内开始的时候(*立刻执行*)，而定时器版的函数触发是在时间段内结束的时候(*延迟执行*)
 */
export const throttle = (func: () => void, waitTime: number, type: number) => {
  let previous = 0
  let timeout: any
  if (type === 1) {
    const now = Date.now()

    if (now - previous > waitTime) {
      func()
      previous = now
    }
  } else if (type === 2) {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func()
      }, waitTime)
    }
  }
}
