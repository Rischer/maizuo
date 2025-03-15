<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多的影院数据了"
    @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item">
      <template #title>
        <router-link class="items" to="/cinema/1000/film">
          <div class="left">
            <span>中影国线影城(坑梓店)</span>
            <span>深圳市坪山区坑梓街道人民西路友田万家百货商场三楼</span>
          </div>
          <div class="right">
            <strong>￥<span>39</span>起</strong>
            <b>2829.5km</b>
          </div>
        </router-link>
      </template>
    </van-cell>
  </van-list>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
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
    max-width: 80%;
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
    font-size: 12px;
    color: #ff5f16;
    font-weight: normal;
  }
  .right span {
    font-size: 18px;
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
