<template>
  <div class="box">
    <!-- 顶部导航 -->
    <!-- 
      key值，在新旧对比时，如果新的组件中key在旧的组件中没有，则删除旧的，创建新的
     -->
    <!-- <topNav :key='list.length'  /> -->
    <topNav :loadCinemas="loadCinemas" />
    <!-- 影院列表 -->
    <cinemas-list :list="list" :loading.sync="loading" :finished="finished" :onLoadData="onLoad" />
  </div>
</template>

<script>
import { getCinemaList } from '@/api/cinemaApi'
export default {
  components: {
    topNav: () => import('./ui/topNav.vue'),
    cinemasList: () => import('./ui/cinemasList.vue')
  },
  data() {
    return {
      page: 1,
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    async loadCinemas(cityid) {
      let ret = await getCinemaList(1, cityid)
      this.list = ret.data.cinemas
    },
    async onLoad() {
      let ret = await getCinemaList(this.page)
      if (ret.data.cinemas.length > 0) {
        this.list.push(...ret.data.cinemas)
        this.page++
        // 加载状态结束
        this.loading = false
      } else {
        this.finished = true
        this.$toast({
          message: '没有更多的新数据',
          icon: '/img/noData.png',
          duration: 3000
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  min-height: 100%;
  padding-bottom: 50px;
}
</style>
