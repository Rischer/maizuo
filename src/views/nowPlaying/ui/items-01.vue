<template>
  <section class="nowPlayingFilm-item">
    <router-link :to="`/film/${film.filmId}`">
      <img v-lazy="film.poster" alt="" />
      <div>
        <h3>
          <span>{{ film.name }}</span>
          <span>{{ film.filmType.name }}</span>
        </h3>
        <p>观众评分<span>7.3</span></p>
        <p>主演：{{ film.actors }}</p>
        <p>中国大陆 | 120分钟</p>
      </div>
      <span>购票</span>
    </router-link>
  </section>
</template>

<script>
export default {
  props: ['film']
}
</script>

<style lang="scss" scoped>
/*
移动端1px解决方案
https://blog.csdn.net/weixin_40808668/article/details/128072229
*/
.nowPlayingFilm-item {
  /* border-bottom: 1px solid #f5f5f5; */
  /* padding: 15px 15px 15px 0; */
  height: 94px;
  /* margin-left: 15px; */
  position: relative;
  /* 1PX处理 */
  /* &:after {
    content: '';
    position: absolute;
    bottom: 0;
    background: #f5f5f5;
    width: 100%;
    height: 1px;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  } */
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    width: 66px;
    height: 94px;
    margin-right: 10px;
    border: 1px solid #a1a2a4;
    border-radius: 2px;
  }
  div {
    width: calc(100% - 116px);
    line-height: 1;
    h3 {
      display: flex;
      align-items: center;
      span {
        &:first-child {
          max-width: calc(100% - 25px);
          color: #191a1b;
          font-size: 16px;
          height: 22px;
          line-height: 22px;
          margin-right: 5px;
          // 文本超出行隐藏css
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &:last-child {
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          height: 14px;
          line-height: 14px;
          padding: 0 2px;
          border-radius: 2px;
        }
      }
    }
    h3 + p {
      font-size: 13px;
      margin-top: 4px;
      color: #797d82;
    }
  }
}

.nowPlayingFilm-item h3 + p span {
  color: #ffb232;
  font-size: 14px;
  margin-left: 5px;
}

.nowPlayingFilm-item h3 + p + p {
  font-size: 13px;
  margin-top: 4px;
  color: #797d82;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80%;
}

.nowPlayingFilm-item h3 + p + p + p {
  font-size: 13px;
  margin-top: 4px;
  color: #797d82;
}

.nowPlayingFilm-item a > span {
  line-height: 25px;
  height: 25px;
  width: 50px;
  color: #ff5f16;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  display: block;
  border: 1px solid #ff5f16;
}
</style>
