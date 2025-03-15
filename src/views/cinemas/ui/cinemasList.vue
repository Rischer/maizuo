<template>
  <van-list
    v-model="listLoading"
    :finished="finished"
    finished-text="没有更多的影院数据了"
    @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item.cinemaId">
      <template #title>
        <router-link class="items" :to="`/cinema/${item.cinemaId}/film`">
          <div class="left">
            <span>{{ item.name }}</span>
            <span>{{ item.address }}</span>
          </div>
          <div class="right">
            <strong>￥<span>{{item.lowPrice/100}}</span>起</strong>
            <b>{{ item.Distance.toFixed(2) }}km</b>
          </div>
        </router-link>
      </template>
    </van-cell>
  </van-list>
</template>

<script>
export default {
  props: ['list', 'loading', 'finished', 'onLoadData'],
  data() {
    return {}
  },
  computed: {
    listLoading: {
      get() {
        return this.loading
      },
      set(v) {
        this.$emit('update:loading', v)
      }
    }
  },
  methods: {
    onLoad() {
      this.onLoadData()
    }
  }
}
</script>

<style lang="scss" scoped>
.van-list{
  margin-top: 95px;
}
.van-cell {
  padding: 0;
}
.items {
  display: flex;
  padding: 15px;
  box-sizing: border-box;
  justify-content: space-between;
  line-height: 1;
  .left span:first-child {
    color: #191a1b;
    font-size: 15px;
    display: block;
  }
  .left span:last-child {
    color: #797d82;
    font-size: 12px;
    margin-top: 10px;
    width: calc(100vw - 110px);
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }
  .right strong {
    font-size: 11px;
    color: #ff5f16;
    font-weight: normal;
  }
  .right span {
    font-size: 15px;
    color: #ff5f16;
  }
  .right b {
    font-weight: 400;
    display: block;
    margin-top: 10px;
    font-size: 11px;
    color: #797d82;
  }
}
</style>
