<template>
  <div class="city">
    <div class="title">热门城市</div>
    <div class="hot">
      <div class="item">北京</div>
      <div class="item">上海</div>
      <div class="item">天津</div>
      <div class="item">重庆</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.city {
  margin-top: 10px;
  background: #fff;
  padding: 10px;
  padding-left: 5px;
  box-sizing: border-box;
}
.title {
  font-size: 13px;
  color: #797d82;
  margin-bottom: 10px;
}
.hot {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  font-size: 14px;
  color: #191a1b;
  .item {
    width: calc(33.333333% - 5px);
    background: #f4f4f4;
    text-align: center;
    padding: 5px;
    box-sizing: border-box;
    margin-left: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
}
</style>
