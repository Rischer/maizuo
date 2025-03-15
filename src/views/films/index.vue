<template>
  <div class="films-box">
    <!-- 导航吸顶效果 -->
    <div class="navtab" :class="{ navtabscroll: navTop }">
      <div class="title" v-show="navTop">
        <div>
          <span @click="goCity">{{ cname }}</span>
          <van-icon name="arrow-down" />
        </div>
        <div>电影</div>
      </div>
      <van-tabs v-model="active" border title-active-color="#ff5f16" color="#ff5f16">
        <van-tab title="正在热映" to="/films/nowPlaying" replace />
        <van-tab title="即将上映" to="/films/comingSoon" replace />
      </van-tabs>
    </div>
    <router-view />
  </div>
</template>

<script>
import { throttle } from '@/utils/tools'
export default {
  data() {
    return {
      active: 0,
      navTop: false
    }
  },
  mounted() {
    // 绑定事件
    document.addEventListener('scroll', this.scrollTopFn)
  },
  beforeDestroy() {
    // 解绑事件
    document.removeEventListener('scroll', this.scrollTopFn)
  },
  methods: {
    // scrollTopFn() {
    //   console.log(document.documentElement.scrollTop)
    //   this.navTop = document.documentElement.scrollTop > 100
    // }
    // 使用节流函数对滚动事件进行优化处理
    scrollTopFn: throttle(function () {
      // console.log(document.documentElement.scrollTop)
      this.navTop = document.documentElement.scrollTop > 100
    }),
    goCity() {
      // 编程式导航
      this.$router.push('/city')
    }
  },
  watch: {
    '$route.path': {
      immediate: true,
      handler(path) {
        this.active = path === '/films/comingSoon' ? 1 : 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.films-box {
  min-height: 100%;
}
.navtab {
  background: white;
  z-index: 1;
  width: 100%;
}
.navtabscroll {
  position: fixed;
  top: 0;
}
.title {
  height: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  > div:first-child {
    width: 50px;
    font-size: 11px;
    max-width: 58px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #191a1b;
    padding-right: 5px;
    > span {
      font-size: 13px;
      margin-right: 5px;
    }
  }
  > div:last-child {
    flex: 1;
    text-align: center;
    font-size: 17px;
    color: #191a1b;
    text-indent: -55px;
  }
}
</style>
