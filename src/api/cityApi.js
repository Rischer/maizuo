import { get } from '@/utils/http'

/**
 * 城市列表
 * @returns Promise
 *
 * {
 *  A:[{cityId: 110100, name: '北京', pinyin: 'beijing', isHot: 1}],
 *  B:[...]
 * }
 */
// export const getCitiesInfo = async () => {
//   let data = {}
//   let ret = await get(`/api/v1/getCitiesInfo`)
//   let cities = ret.data.cities

//   // 生成A-Z对应对象数组件
//   for (let i = 65; i <= 90; i++) {
//     data[String.fromCharCode(i)] = []
//   }

//   cities.forEach(item => {
//     const key = item.pinyin.slice(0, 1).toUpperCase()
//     if (data[key]) {
//       data[key].push(item)
//     } else {
//       data[key] = [item]
//     }
//   })
//   let indexList = Object.keys(data)
//   indexList.sort()

//   return [indexList, data]
// }

export const getCitiesInfo = async () => {
  let data = {}
  let ret = await get(`/api/v1/getCitiesInfo`)
  let cities = ret.data.cities

  // 生成A-Z对应对象数组件  data = {A:[],B:[]}
  for (let i = 65; i <= 90; i++) {
    data[String.fromCharCode(i)] = []
  }

  for (let key in data) {
    data[key] = cities.filter(item => {
      const indexName = item.pinyin.slice(0, 1).toUpperCase()
      return key === indexName
    })
    if (data[key].length === 0) delete data[key]
  }
  let indexList = Object.keys(data)

  // return [indexList, data]
  return data
}
