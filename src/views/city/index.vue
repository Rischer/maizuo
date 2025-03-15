<template>
  <div class="box">
    <!-- 导航 -->
    <topNav />
    <!-- 搜索 -->
    <form action="/">
      <van-search
        v-model="cityname"
        show-action
        placeholder="请输入搜索城市名称"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <!-- 热门城市 -->
    <hot-city />
    <!-- 索引城市选择 -->
    <van-index-bar highlight-color="#ff5f16" @select="onSelect" :index-list="indexList">
      <template v-for="(item, key) in cities">
        <van-index-anchor :key="key" :index="key" />
        <van-cell
          v-for="val in item"
          :key="val.cityId"
          :title="val.name"
          @click="onSelectItemCity(val.cityId, val.name)"
        />
      </template>
    </van-index-bar>
  </div>
</template>

<script>
export default {
  components: {
    topNav: () => import('./ui/topNav.vue'),
    hotCity: () => import('./ui/hotCity.vue')
  },
  data() {
    return {
      cityname: ''
    }
  },
  computed: {
    cities() {
      return this.$store.state.city.cities
    },
    indexList() {
      return this.$store.getters['city/indexList']
    }
    // cname() {
    //   return this.$store.state.city.city.name
    // }
  },
  mounted() {
    this.$store.dispatch('city/getCitiesInfoAction')
  },
  methods: {
    onSelect(index) {
      console.log(index)
    },
    onSelectItemCity(id, name) {
      // console.log(id, name)
      this.$store.commit('city/setCity', { id, name })
      this.$router.replace('/films/nowPlaying')
    },
    onSearch(val) {
      console.log('搜索', val)
    },
    onCancel() {
      this.cityname = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  min-height: 100%;
  background: #f4f4f4;
}
</style>
