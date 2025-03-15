<template>
  <div class="top-nav">
    <div @click="goHome"><van-icon name="cross" /></div>
    <div>当前城市 - {{ cname }}</div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.replace('/films/nowPlaying')
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
  div {
    &:first-child {
      width: 40px;
      font-size: 19px;
    }
    &:last-child {
      flex: 1;
      font-size: 17px;
      text-align: center;
    }
  }
}
</style>
