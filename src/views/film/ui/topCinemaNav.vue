<template>
  <div class="top-nav">
    <div @click="goBack"><van-icon name="arrow-left" /></div>
    <div>电影名称</div>
    <div><van-icon name="search" /></div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.top-nav {
  background: #fff;
  color: #191a1b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
  font-size: 17px;
  div {
    &:first-child {
      width: 40px;
      font-size: 19px;
    }
    &:last-child {
      font-size: 19px;
    }
  }
}
</style>
