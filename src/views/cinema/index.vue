<template>
  <div>
    <!-- 头部模块 -->
    <header class="index-title">
      <p class="city" @click="goBack">
        <img src="/img/left.png" />
      </p>
      <p class="title"></p>
      <p class="right"></p>
    </header>
    <!-- 标题 -->
    <div class="cinema-title">深圳华夏君盛影城坪地店</div>
    <!-- 小标签 -->
    <div class="cinema-tags">
      <span>儿童票</span>
      <span>3D眼镜</span>
      <img src="/img/myright.png" alt="" />
    </div>
    <!-- 地址 -->
    <div class="address">
      <img src="/img/address1.png" alt="" />
      <p>深圳市龙岗区坪地街道龙岗大道3018宜城广场3楼</p>
      <img src="/img/phone.png" alt="" @click="callPhone" />
      <!-- <a href="tel://13521251251">打电话</a> -->
    </div>
    <!-- 电影图片 -->
    <div class="film-haibao">
      <div class="film-bg">
        <van-swipe class="my-swipe" indicator-color="white" @change="changeFilm">
          <van-swipe-item v-for="item in films" :key="item.filmId">
            <img class="film-bg-img" :src="item.poster" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <img src="/img/top.png" alt="" />
    </div>
    <!-- 电影信息 -->
    <br />
    <div class="bigbox">
      <img src="/img/bright.png" alt="" />
      <div class="film-info">
        <span class="film-name">坚如磐石</span>
        <span><i>7.3</i>分</span>
      </div>
      <p class="film-desc">
        剧情|动作|犯罪 | 120分钟 | 张艺谋 | 张艺谋 雷佳音 张国立 于和伟 周冬雨
      </p>
    </div>

    <!-- 日期 -->
    <div class="date-list">
      <span>今天10月18日</span>
      <span class="active">明天10月19日</span>
    </div>
    <!-- 场次信息内容 -->
    <div class="schedule-item" v-for="(item, index) in 10" :key="index">
      <div class="left">
        <span class="start-at">09:00</span>
        <span class="start-end">11:15散场</span>
      </div>
      <div class="center">
        <span class="language">英语2D</span>
        <span class="hall">skVIP厅</span>
      </div>
      <div class="right">
        <span class="lowest-price">￥<b>0</b></span>
        <router-link :to="`/schedule/${index}`" class="buy-ticket" tag="span">购票</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getCinemaIdToFilms } from '@/api/cinemaApi'
import { isMobile } from '@/utils/tools'
export default {
  props: ['cid', 'fid', 'time'],
  data() {
    return {
      films: []
    }
  },
  methods: {
    changeFilm(index) {
      console.log(this.films[index].filmId)
    },
    // 拨打电话
    callPhone() {
      const tel = '0779-3063588'
      // pc端
      if (!isMobile()) {
        this.$dialog({
          title: '联系方式',
          message: tel
        })
      } else {
        // <a href="tel://13521251251">打电话</a>
        let aDom = document.createElement('a')
        aDom.href = `tel://${tel}`
        document.body.appendChild(aDom)
        aDom.click()
        setTimeout(() => {
          aDom.remove()
        }, 100)
      }
    },
    goBack(){
      this.$router.go(-1)
    }
  },
  async mounted() {
    let ret = await getCinemaIdToFilms(this.cid)
    this.films = ret.data.films
  }
}
</script>

<style lang="scss" scoped>
.index-title {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
}

.index-title .city {
  margin-left: 15px;
  display: flex;
  justify-content: center;
  font-size: 12px;
  align-items: center;
}

.index-title .city img {
  width: 11px;
  height: 18px;
  padding-left: 5px;
}

/* 标题 */
.cinema-title {
  margin-top: 44px;
  text-align: center;
  font-size: 17px;
  color: #191a1b;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 15px;
  background: #fff;
  top: 0;
  height: 44px;
  line-height: 44px;
}

/* 小标签样式 */
.cinema-tags {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 5px;
}

.cinema-tags span {
  line-height: 1;
  padding: 3px 6px;
  margin: 0 2.5px;
  font-size: 10px;
  border: 1px solid #ffb232;
  border-radius: 1px;
  color: #ffb232;
}

.cinema-tags img {
  width: 10px;
  height: 15px;
  margin-left: 3px;
}

/* 地址 */
.address {
  height: 50px;
  border-top: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.address img:nth-child(1) {
  width: 14px;
  height: 21px;
  padding-left: 17px;
}

.address p {
  padding: 0 12px;
  flex: 1;
  color: #191a1b;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}

.address img:nth-child(3) {
  width: 17px;
  height: 18px;
  padding: 0 25px;
}

/* 电影图片 */
.film-haibao {
  height: 160px;
  width: 100%;
  padding: 15px 0;
  /* overflow: hidden; */
  position: relative;
}

.film-bg {
  /* position: absolute; */
  /* top: 0; */
  height: 160px;
  width: 100%;
  padding: 15px 0;
  overflow: hidden;
  /* background: url(http://localhost:8080/hb2.jpg) left top/cover; */
  /* filter: blur(50px); */
  /* z-index: 1;   */
  margin-bottom: 30px !important;
}

.film-bg-img {
  width: 100%;
  height: 100%;
}

/* 电影信息 */
.film-info {
  margin-bottom: 10px;
  text-align: center;
  line-height: 18px;
  margin-top: 10px;
}

.film-name {
  font-size: 15px;
  color: #191a1b;
  padding-right: 5px;
}

.film-info i {
  font-size: 16px;
  font-style: italic;
  color: #ffb232;
}

.film-info span:last-child {
  font-size: 10px;
  color: #ffb232;
}

.bigbox {
  position: relative;
  margin-top: 10px !important;
}

.bigbox > img {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 8px;
}

.bigbox > p {
  text-align: center;
  height: 18px;
  color: #797d82;
  font-size: 13px;
  padding: 0 12%;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 日期内容 */
.date-list {
  height: 49px;
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  line-height: 49px;
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.date-list span {
  margin: 0px 15px;
  font-size: 14px;
}

.date-list .active {
  color: #ff5f16;
  border-bottom: 2px solid #ff5f16;
}

/* 场次信息内容 */
.schedule-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  line-height: 1;
}

.schedule-item span {
  display: block;
}

.schedule-item .start-at {
  font-size: 15px;
  color: #191a1b;
}

.schedule-item .start-end {
  font-size: 13px;
  color: #797d82;
  margin-top: 10px;
}

.schedule-item .center {
  flex: 1;
  margin: 0 20px;
}

.schedule-item .language {
  font-size: 15px;
  color: #191a1b;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.schedule-item .hall {
  font-size: 13px;
  color: #797d82;
  margin-top: 2px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
}

.schedule-item .right {
  display: flex;
  color: #ff5f16;
  align-items: center;
}

.schedule-item .buy-ticket {
  height: 25px;
  width: 50px;
  border-radius: 2px;
  text-align: center;
  border: 1px solid #ff5f16;
  border-radius: 4px;
  line-height: 25px;
  margin-left: 10px;
  font-size: 12px;
}
.schedule-item .lowest-price {
  font-size: 10px;
}
.schedule-item .lowest-price b {
  font-size: 15px;
}
</style>
