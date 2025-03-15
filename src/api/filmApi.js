import { post, get } from '@/utils/http'

/**
 * 正在热映列表数据
 * @param {number} pageNum 页码，默认第1页
 * @param {number} cityId 城市id 北京：110100
 * @param {number} pageSize 一页数据量 10
 * @returns Promise
 */
export const getNowPlayingFilmList = async (pageNum = 1, cityId = 110100, pageSize = 10) => {
  let ret = await get(
    `/api/v1/getNowPlayingFilmList?cityId=${cityId}&pageNum=${pageNum}&pageSize=${pageSize}`
  )
  let films = ret.data.films
  return films.map(item => {
    return {
      ...item,
      actors: Array.isArray(item.actors) ? item.actors.map(val => val.name).join(' ') : ''
    }
  })
}

/**
 * 即将上映列表数据
 * @param {number} pageNum 页码，默认第1页
 * @param {number} cityId 城市id 北京：110100
 * @param {number} pageSize 一页数据量 10
 * @returns Promise
 */
export const getComingSoonFilmList = (pageNum = 1, cityId = 110100, pageSize = 10) =>
  get(`/api/v1/getComingSoonFilmList?cityId=${cityId}&pageNum=${pageNum}&pageSize=${pageSize}`)

/**
 * 根据电影id返回对应数据
 * @param {number} id 电影id
 * @returns Promise
 */
export const getFilmInfo = id => get(`/api/v1/getFilmInfo?filmId=${id}`)

// 根据电影id获取影院列表
export const getFilmIdToCinemas = postData =>
  post(`/maizuo/gateway?k=4332766`, postData, {
    headers: {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.2.1","e":"16825617593726962166071297","bc":"450500"}',
      'X-Host': 'mall.film-ticket.cinema.batch-cinema'
    }
  })
