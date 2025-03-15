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
import { getCitiesInfo } from '@/api/cityApi'
export default {
  components: {
    topNav: () => import('./ui/topNav.vue'),
    hotCity: () => import('./ui/hotCity.vue')
  },
  data() {
    return {
      cityname: '',
      indexList: [],
      cities: {}
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      let [indexList, cities] = await getCitiesInfo()
      this.indexList = indexList
      this.cities = cities

    },
    onSelect(index) {
      console.log(index)
    },
    onSelectItemCity(id, name) {
      console.log(id, name)
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
