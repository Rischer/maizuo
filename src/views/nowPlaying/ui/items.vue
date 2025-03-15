<template>
  <section class="nowPlayingFilm">
    <router-link class="item" :to="`/film/${film.filmId}`" tag="div">
      <img v-lazy="film.poster" alt="" />
      <div class="info">
        <div class="info-col">
          <span class="name">{{ film.name }}</span>
          <span class="item">{{ film.filmType.name }}</span>
        </div>
        <div class="nowPlayingFilm-grade">
          <span class="label">观众评分</span>
          <span class="grade">{{ film.grade }}</span>
        </div>
        <div class="nowPlayingFilm-actors">主演：{{ film.actors }}</div>
        <div class="nowPlayingFilm-detail">{{ film.nation }} | {{ film.runtime }}分钟</div>
      </div>
      <div class="nowPlayingFilm-buy">购票</div>
    </router-link>
  </section>
</template>

<script>
export default {
  props: ['film']
}
</script>

<style lang="scss" scoped>
.nowPlayingFilm {
  .item {
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
      align-items: flex-start;
      line-height: normal;
      .info-col {
        display: flex;
        align-items: center;
        width: calc(100vw - 200px);
        .name {
          color: #191a1b;
          font-size: 16px;
          height: 22px;
          line-height: 22px;
          margin-right: 5px;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .item {
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          height: 14px;
          line-height: 14px;
          padding: 0 2px;
          border-radius: 2px;
        }
      }
      .nowPlayingFilm-grade {
        display: flex;
        align-items: center;
        .label {
          font-size: 13px;
          margin-top: 4px;
          color: #797d82;
        }
        .grade {
          margin-left: 10px;
          color: #ffb232;
          font-size: 14px;
        }
      }
      .nowPlayingFilm-actors {
        font-size: 13px;
        margin-top: 4px;
        color: #797d82;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: calc(100vw - 200px);
      }
      .nowPlayingFilm-detail {
        font-size: 13px;
        margin-top: 4px;
        color: #797d82;
      }
    }
    .nowPlayingFilm-buy {
      line-height: 25px;
      height: 25px;
      width: 50px;
      color: #ff5f16;
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
        border: 1px solid #ff5f16;
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        border-radius: 4px;
      }
    }
  }
}
</style>
