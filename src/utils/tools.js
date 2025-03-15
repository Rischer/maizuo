// 工具集
import dayjs from 'dayjs'

// 写一个节流函数
export function throttle(fn, delay = 100) {
  let timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
    }
  }
}

// 写一个防抖函数
export function debounce(fn, delay = 300) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

// 延时器
export const delay = (ms = 300) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

// 计算多当天到向后6天的日期写一个函数  dayjs momentjs
export const getRangeDay = (day = 6) => {
  let days = []
  let weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  for (let i = 1; i <= day; i++) {
    let week = ''
    let weekIndex = dayjs().add(i, 'day').format('d')
    if (i == 1) {
      week = '明天'
    } else if (i == 2) {
      week = '后天'
    } else {
      week = weeks[weekIndex]
    }
    let daytime = dayjs().add(i, 'day')
    let daystr = week + daytime.format('MM月DD日')
    days.push({ daytime: daytime.unix(), daystr })
  }
  return days
}

// 写一个判断是否是移动端
export const isMobile = () => {
  const userAgentInfo = navigator.userAgent
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'Mobile']
  return Agents.some((item) => userAgentInfo.includes(item))
}

export const formatTime = (seconds) => {
  const date = dayjs.unix(seconds)
  const formattedDate = date.format('YYYY-MM-DD')
  const dayIndex = date.format('d')
  const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  const formattedWeekDay = weekDays[dayIndex]
  const formattedMonthDay = date.format('MM月DD日')
  return {
    formattedDate: formattedDate,
    formattedWeekDay: `${formattedWeekDay} ${formattedMonthDay}`
  }
}
