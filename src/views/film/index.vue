<template>
  <div class="box">
    <!-- <wuLoading /> -->
    <!-- 多条件判断时，一定要加key值，不然不生效 -->
    <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
      <div style="background: white" v-if="film == null" key="loading">
        <van-skeleton title :row="20" />
      </div>
      <div v-if="film != null" key="info">
        <!-- 电影内容页的大banner图 -->
        <div class="film-banner">
          <div v-if="isShow" class="film-header">
            <van-icon @click="goBack" class="back-icon" name="arrow-left" />
            <span>{{ film.name }}</span>
          </div>
          <van-icon @click="goBack" class="back-icon" name="arrow-left" />
          <img v-lazy="film.poster" alt="" />
        </div>
        <!-- 电影内容页的内容 -->
        <div class="film-detail">
          <div class="detail-one">
            <h3>
              <span>{{ film.name }}</span>
              <span>2D</span>
            </h3>
            <i v-show="film.grade">
              <em>{{ film.grade }} </em>分
            </i>
          </div>
          <p>{{ film.category }}</p>
          <p>{{ date }}上映</p>
          <p>{{ film.nation }} | {{ film.runtime }}分钟</p>
          <p class="synopsis" :class="{ hidde: showToggle }">{{ film.synopsis }}</p>
          <div class="toggle">
            <van-icon @click="toggle" :name="iconname" />
          </div>
        </div>
        <!-- 演员 -->
        <div class="actors">
          <h3>演员人员</h3>
          <ul>
            <li v-for="(item, index) in film.actors" :key="index">
              <div>
                <img :src="item.avatarAddress" alt="" />
              </div>
              <h4>{{ item.name }}</h4>
              <p>{{ item.role }}</p>
            </li>
          </ul>
        </div>

        <!-- 剧照 -->
        <div class="photos">
          <div class="title">
            <h3>剧照</h3>
            <a href="">全部({{ film.photos.length }})</a>
          </div>
          <div>
            <div v-for="(item, index) in film.photos" :key="index">
              <img :src="item" class="film_photos" @click="handlePreview(index)" />
            </div>
          </div>
          <van-image-preview v-model="show" :images="film.photos" @change="onChange" closeable :start-position="index" close-icon-position="top-left">
            <template v-slot:index>{{ index + 1 }}/{{ film.photos.length }}</template>
          </van-image-preview>
        </div>
        <!-- 购票选做 -->
        <div class="goSchedule">
          <router-link tag="div" :to="`/film/${film.filmId}/cinemas`">选座购票</router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// Object.keys
// Reflect.ownkeys()
import { getFilmInfo } from '@/api/filmApi'
import filmPageTitleMixin from '@/mixins/filmPageTitleMixin'
import { delay, formatTime } from '@/utils/tools'
export default {
  props: ['id', 'name'],
  mixins: [filmPageTitleMixin],
  data() {
    return {
      // 判断空对象相对来说有些麻烦，不如判断是否为null来的简单一些
      // film: {}
      film: null,
      isShow: false,
      showToggle: true,
      iconname: 'arrow-down',
      show: false,
      index: 0
    }
  },
  mounted() {
    // let res = await this.loadData()
    // await delay(5000)
    this.loadData()
    // 修改标题
    // document.title = `【${res.name}】 - ` + document.title
    document.addEventListener('scroll', this.scrollTopFn)

    
  },
  methods: {
    addToHistory(film) {
      this.$store.commit('history/addToHistory', film);
    },
    async loadData() {
      let ret = await getFilmInfo(this.id)
      this.film = ret.data.film
      // return this.film
      this.addToHistory(this.film)
    },
    goBack() {
      this.$router.go(-1)
    },
    scrollTopFn() {
      if (document.documentElement.scrollTop > 20) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    toggle() {
      this.showToggle = !this.showToggle
      if (this.showToggle) {
        this.iconname = 'arrow-down'
      } else {
        this.iconname = 'arrow-up'
      }
    },
    handlePreview(index) {
      this.show = true
      this.index = index
    },
    onChange(index) {
      this.index = index
    }
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollTopFn)
  },
  computed: {
    date() {
      return formatTime(this.film.premiereAt).formattedDate
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  background: #f4f4f4;
  padding-bottom: 1px;
}

.film-banner {
  height: 210px;
  position: relative;
  overflow: hidden;
}
.film-header {
  font-size: 17px;
  line-height: 44px;
  width: 100vw;
  text-align: center;
  position: fixed;
  z-index: 1;
  background-color: #fff;
}
.back-icon {
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  color: #000;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 1;
  text-align: center;
  line-height: 30px;
  font-size: 22px;
  position: fixed;
}

.film-banner img:last-child {
  position: absolute;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.synopsis {
  overflow: hidden; //超出部分隐藏
  text-overflow: ellipsis; //当对象内文本溢出时显示省略标记（...）
  // display: -webkit-box; //弹性伸缩盒子模型显示
  // -webkit-box-orient: vertical; // 甚至伸缩盒对象的子元素排列方式
  // -webkit-line-clamp: 2; // 限制一个块元素显示文本的行数
}
.hidde {
  height: 40px;
}
.toggle {
  text-align: center;
  height: auto;
  width: 20px;
  margin: auto;
  line-height: normal;
  font-size: 14px;
}

/* 电影内容页的内容 */
.film-detail {
  padding: 15px;
  padding-top: 12px;
  background-color: #fff;
  line-height: 1;
}

.film-detail .detail-one {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.film-detail .detail-one h3 {
  display: flex;
  align-items: center;
}

.film-detail .detail-one span:first-child {
  color: #191a1b;
  font-size: 18px;
  height: 24px;
  line-height: 24px;
  margin-right: 7px;
}

.film-detail .detail-one span:last-child {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
  display: inline-block;
}

.film-detail .detail-one i {
  color: #ffb232;
  font-size: 12px;
  font-style: normal;
}

.film-detail .detail-one em {
  font-size: 18px;
}

.film-detail .detail-one + p {
  font-size: 13px;
  color: #797d82;
  margin-top: 4px;
}

.film-detail .detail-one + p + p {
  font-size: 13px;
  color: #797d82;
  margin-top: 4px;
}

.film-detail .detail-one + p + p + p {
  font-size: 13px;
  color: #797d82;
  margin-top: 4px;
}

.film-detail .detail-one + p + p + p + p {
  font-size: 13px;
  color: #797d82;
  margin-top: 12px;
  line-height: 22px;
}

/* 演员的css */
.actors {
  margin-top: 10px;
  background-color: #fff;
}

.actors h3 {
  font-weight: normal;
  padding: 15px;
  font-size: 14px;
}

.actors ul {
  display: flex;
  padding: 15px;
  width: 100%;
  overflow: auto;
  box-sizing: border-box;

  // 隐藏滚动条
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
}

.actors li {
  width: 85px;
  flex-shrink: 0;
  margin-right: 10px;
  text-align: center;
  line-height: 18px;
  font-size: 12px;
}
.actors li div {
  position: relative;
  height: 85px;
  overflow: hidden;
  margin-bottom: 10px;
}
.actors li img {
  width: 100%;
  margin-bottom: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.actors h4 {
  font-size: 14px;
}

.actors p {
  font-size: 12px;
  color: #797d82;
}

/* 剧照 */
.photos {
  background: white;
  margin-top: 10px;
  padding: 15px;
  margin-bottom: 50px;
}

.photos .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  font-size: 14px;
  color: #191a1b;
}

.photos .title a {
  font-size: 13px;
  color: #797d82;
}

.photos .title + div {
  display: flex;
  width: 100%;
  overflow: auto;
  position: relative;
  box-sizing: border-box;
  // 隐藏滚动条
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
}

.photos .title + div {
  width: 100%;

  height: 100px;
  margin-right: 10px;
}
.photos .title + div > div {
  min-width: 150px;
  height: 100px;
  margin-right: 10px;
  overflow: hidden;
  position: relative;
}
.film_photos {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

/* 购票选做 */
.goSchedule {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 49px;
  width: 100%;
  text-align: center;
  background-color: #ff5f16;
  color: #fff;
  font-size: 16px;
  line-height: 49px;
}
</style>
