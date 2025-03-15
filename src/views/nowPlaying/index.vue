<template>
  <div class="box">
    <!-- 
      loading为false时，加载数据
      finished为true时，停止加载数据
     -->
    <van-list v-model="loading" :finished="finished" finished-text="！！我是有底线的！！" @load="onLoad">
      <van-cell v-for="item in nowPlayingFilmList" :key="item.id">
        <template #title>
          <items :film="item" />
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { getNowPlayingFilmList } from '@/api/filmApi'
import items from './ui/items.vue'
export default {
  components: {
    items
  },
  data() {
    return {
      page: 1,
      loading: false,
      finished: false,
      nowPlayingFilmList: []
    }
  },
  methods: {
    async onLoad() {
      // 获取正在热映列表数据
      let ret = await getNowPlayingFilmList(this.page)
      this.nowPlayingFilmList.push(...ret)
      // 加载状态结束
      this.loading = false
      // 数据全部加载完成，没有更多的新数据了
      if (ret.length === 0) {
        this.finished = true
        // 已没有更多新数据了
        this.$toast({
          type: 'text',
          message: '已没有更多新数据...',
          duration: 3000,
          overlay: true,
          forbidClick: true,
          icon: '/img/noData.png'
        })
      } else {
        this.page++
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  padding-bottom: 50px;
}
</style>
