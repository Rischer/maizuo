<template>
  <div class="box">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item.filmId">
        <template #title>
          <items :film="item" />
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { getComingSoonFilmList } from '@/api/filmApi'
export default {
  components: {
    items: () => import('./ui/items.vue')
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
    async onLoad() {
      let ret = await getComingSoonFilmList(this.page)
      if (ret.data.films.length > 0) {
        this.list.push(...ret.data.films)
        this.page++
        // 加载状态结束
        this.loading = false
      } else {
        this.finished = true
        this.$toast({
          message: '没有更多即将上映电影',
          duration: 3000,
          icon: '/img/noData.png'
        })
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
