<template>
  <div>
    <topCinemaNav />
    <van-divider />
    <van-tabs title-active-color="#ff5f16" :line-width="85" :line-height="1" color="#ff5f16">
      <van-tab v-for="(item, index) in weeks" :title="item.daystr" :key="index" @click="onTabItem(item.daytime)" />
    </van-tabs>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <van-divider />
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item.cinemaId">
        <template #title>
          <router-link tag="span" :to="`/cinema/${item.cinemaId}/film/${id}/${daytime}`">
            <div class="box">
              <div class="left">
                <span>{{ item.name }}</span>
                <span>{{ item.address }}</span>
              </div>
              <div class="right">
                  ￥<span>{{ item.lowPrice / 100 }} </span>起
              </div>
            </div>
          </router-link>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { getRangeDay } from '@/utils/tools'
import { getFilmIdToCinemas } from '@/api/filmApi'
export default {
  props: ['id'],
  components: {
    topCinemaNav: () => import('./ui/topCinemaNav.vue')
  },
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全城', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '最近去过', value: 'a' },
        { text: '离我最近', value: 'b' }
      ],
      list: [],
      loading: false,
      finished: false,
      daytime: getRangeDay()[0].daytime
    }
  },
  computed: {
    weeks() {
      return getRangeDay()
    }
  },
  methods: {
    onTabItem(daytime) {
      this.daytime = daytime
    },
    async onLoad() {
      let postData = {
        cityId: 450500,
        cinemaIds: '10611,8911,10651,12737,2156,11302,1087,1225,11303,11459,11304'
      }
      let ret = await getFilmIdToCinemas(postData)
      // console.log(ret.data.cinemas)
      if (ret.data.cinemas.length > 0) {
        this.list = ret.data.cinemas
        // 加载状态结束
        // this.loading = false
        this.finished = true
      } else {
        // this.finished = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/* 
// 对组件中的样式进行重置
  + 内联样式 style
  + 自定义样式名 class
  + 提高优先级，此写一般配合不写 scoped !important
  + 样式穿透
    v-deep >>> ::deep
    :deep(.样式名)
*/
:deep(.van-dropdown-menu__bar) {
  box-shadow: none;
}
.van-cell__title {
  position: relative;
  padding-bottom: 5px;
  .box {
    height: 45px;
    display: flex;
    .left {
      width: calc(100vw - 100px);
      line-height: 1.5;
      span {
        display: inline-block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:first-child {
          font-size: 15px;
          color: #191a1b;
        }
        &:last-child {
          font-size: 13px;
          color: #797d82;
        }
      }
    }
    .right {
      color: #ff5f16;
      width: 70px;
      text-align: right;
      font-size: 11px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span{
        font-size: 15px;
        
      }
    }
  }
}
</style>
