<template>
  <div class="center-view">
    <div class="avatar">
      <img src="/img/user.png" alt="" />
      <router-link to="/login" tag="div" v-if="!getUserInfo">立即登录</router-link>
      <div v-if="getUserInfo">{{ getUserInfo }}</div>
    </div>
    <div class="my-card">
      <van-icon name="coupon" class="left-icon" />
      <span>电影订单</span>
      <van-icon name="arrow" class="right-icon" />
    </div>
    <router-link to="/myhistory" tag="div" class="my-card history">
      <van-icon name="clock-o" class="left-icon" />
      <span>历史记录</span>
      <van-icon name="arrow" class="right-icon" />
    </router-link>
    <div class="my-card help">
      <van-icon name="chat-o" class="left-icon" />
      <span>帮助与客服</span>
      <van-icon name="arrow" class="right-icon" />
    </div>
    <div class="my-card settings" @click="logout">
      <van-icon name="setting-o" class="left-icon" />
      <span>退出登录</span>
      <van-icon name="arrow" class="right-icon" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getUserInfo() {
      return this.$store.getters['user/getUserInfo']
    }
  },
  methods: {
    logout() {
      this.$store.commit('user/logout')
    }
  }
}
</script>

<style lang="scss" scoped>
.center-view {
  background: #f4f4f4;
  height: 100vh;
  .avatar {
    text-align: center;
    margin-top: -44px;
    height: 200px;
    padding-left: 22px;
    padding-top: 64px;
    background: url(http://localhost:8080/img/bg.a5bdd690.png);
    background-size: cover;
    display: flex;
    align-items: center;
    color: #fff;
    box-sizing: border-box;
    margin-bottom: 10px;
    img {
      width: 63px;
      height: 63px;
      border-radius: 35px;
      margin-right: 20px;
      border: 2px solid #fff;
    }
    div {
      font-size: 16px;
      box-sizing: border-box;
    }
  }
  & > div:not(.avatar) {
    position: relative;
    background: #fff;
    padding: 0 15px;
    height: 49px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    &::after {
      content: ' ';
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-bottom: 1px solid #ededed;
      color: #ededed;
      transform-origin: 0 100%;
      transform: scaleY(0.5);
      left: 13px;
    }
    .left-icon {
      font-size: 20px;
    }
    span {
      margin-left: 15px;
      color: #191a1b;
      flex: 1;
      font-size: 15px;
    }
    .right-icon {
      font-size: 10px;
    }
  }
  .my-card {
    .left-icon {
      color: #ffc82f;
    }
  }
  .history {
    .left-icon {
      color: #ffbf20;
    }
  }
  .help {
    .left-icon {
      color: #5b90b7;
    }
  }
  .settings {
    .left-icon {
      color: #b9cb56;
    }
  }
}
</style>
