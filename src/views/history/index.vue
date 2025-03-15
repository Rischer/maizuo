<template>
  <div class="box">
    <div class="top">
      <div class="header">
        <van-icon @click="goBack" class="back-icon" name="arrow-left" />
        <span>个人历史记录</span>
      </div>
    </div>
    <div class="bottom">
      <ul class="list">
        <van-empty description="这里空空如也" v-if="historyList.length === 0" />
        <li v-for="item in historyList" :key="item.filmId">
          <section class="nowPlayingFilm">
            <router-link class="item" :to="`/film/${item.filmId}`" tag="div">
              <img v-lazy="item.poster" alt="" />
              <div class="info">
                <div class="info-col">
                  <span class="name">{{ item.name }}</span>
                  <span class="item">{{ item.filmType.name }}</span>
                </div>
                <div class="nowPlayingFilm-grade">
                  <span class="label">观众评分</span>
                  <span class="grade">{{ item.grade }}</span>
                </div>
                <div class="nowPlayingFilm-actors">主演：{{ getActors(item) }}</div>
                <div class="nowPlayingFilm-detail">{{ item.nation }} | {{ item.runtime }}分钟</div>
              </div>
              <div class="nowPlayingFilm-buy">购票</div>
            </router-link>
          </section>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/center')
    },
    getActors(item){
      return item.actors.map((val) => val.name).join(' ')
    }
  },
  computed: {
    historyList() {
      return this.$store.getters['history/getHistoryList']
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
}
.header {
  font-size: 17px;
  line-height: 44px;
  width: 100vw;
  text-align: center;
  position: fixed;
  background-color: #fff;
}
.back-icon {
  width: 30px;
  height: 30px;
  top: 5px;
  left: 5px;
  line-height: 30px;
  font-size: 22px;
  position: fixed;
}
.list {
  margin-top: 50px;
  position: absolute;
  width: 100%;
  font-size: 16px;
  li {
    padding: 10px;
  }
}
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
