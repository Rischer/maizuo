import { get } from '@/utils/http'

/**
 * 影院列表
 * @param {number} pageNum 页码 1
 * @param {number} cityId 城市id
 * @param {number} pageSize 每页显示的数量
 * @returns Promise
 */
export const getCinemaList = (pageNum = 1, cityId = 110100, pageSize = 10) =>
  get(`/api/v1/getCinemaList?cityId=${cityId}&pageNum=${pageNum}&pageSize=${pageSize}`)

// 根据影院id获取对应的影片和排片
export const getCinemaIdToFilms = cinemaId =>
  get(`/maizuo/gateway/?cinemaId=${cinemaId}&k=3641621`, {
    headers: {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.2.1","e":"16825617593726962166071297","bc":"450500"}',
      'X-Host': 'mall.film-ticket.film.cinema-show-film'
    }
  })
