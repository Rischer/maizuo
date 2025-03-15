<template>
  <div class="layout">
    <router-view />
    <van-tabbar v-model="active" route active-color="#ff5f16" inactive-color="#797d82">
      <van-tabbar-item replace to="/films">
        <span>电影</span>
        <template #icon>
          <wu-icon name="icon-dianying" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/cinemas">
        <span>影院</span>
        <template #icon>
          <wu-icon name="icon-yingyuan" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/news">
        <span>资讯</span>
        <template #icon>
          <wu-icon name="icon-zixun" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/center">
        <span>个人</span>
        <template #icon>
          <wu-icon name="icon-geren" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100%;
}
</style>
