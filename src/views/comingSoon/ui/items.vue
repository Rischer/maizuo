<template>
  <router-link :to="`/film/${film.filmId}`" tag="div" class="comingSoon">
    <img v-lazy="film.poster" alt="" />
    <div class="info">
      <div class="title">
        <div class="name">{{ film.name }}</div>
        <div class="item">{{ film.filmType.name }}</div>
      </div>
      <div class="actors">主演：{{ film.actors | showActors }}</div>
      <div class="pubdate">上映日期：{{date}}</div>
    </div>
    <div class="buy">预购</div>
  </router-link>
</template>

<script>
import { formatTime } from '@/utils/tools'
export default {
  props: ['film'],
  computed:{
    date(){
      return formatTime(this.film.premiereAt).formattedWeekDay
    }
  }
}
</script>

<style lang="scss" scoped>
.comingSoon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  > img {
    width: 66px;
    height: 94px;
    margin-right: 10px;
    border-radius: 2px;
  }
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .title {
      display: flex;
      align-items: center;
      width: calc(100vw - 200px);
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
      .name {
        color: #191a1b;
        font-size: 16px;
        height: 22px;
        line-height: 22px;
      }
      .item {
        margin-left: 10px;
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
      }
    }
    .actors {
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: calc(100vw - 160px);
      font-size: 13px;
      margin-top: 4px;
      color: #797d82;
    }
    .pubdate {
      font-size: 13px;
      margin-top: 4px;
      color: #797d82;
    }
  }
  .buy {
    line-height: 25px;
    height: 25px;
    width: 50px;
    color: #ffb232;
    font-size: 13px;
    text-align: center;
    border-radius: 2px;
    position: relative;
    &::after {
      content: ' ';
      -webkit-transform: scale(0.5);
      -ms-transform: scale(0.5);
      transform: scale(0.5);
      position: absolute;
      border: 1px solid #ffb232;
      top: -50%;
      right: -50%;
      bottom: -50%;
      left: -50%;
      border-radius: 4px;
    }
  }
}
</style>
