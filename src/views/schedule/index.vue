<template>
  <div class="box">
    <!-- 头部模块 -->
    <header class="index-title">
      <p class="city" @click="goBack">
        <img src="/img/left.png" />
      </p>
      <p class="title">沙河镇中影智信影城</p>
      <p class="right"></p>
    </header>
    <!--消息提示 -->
    <div class="notice-message">
      <p>
        <img src="/img/mess.png" alt="" class="mess" />
        <span>祝您观影愉快祝您观影愉快祝您观影愉快祝您观影愉快祝您观影愉快祝您观影愉快祝您观影愉快祝您观影愉快祝您观影愉快</span>
      </p>
      <p>
        <span>一个通知</span>
        <img src="/img/bottom.png" alt="" class="bot" />
      </p>
    </div>
    <!-- 座位表 -->
    <div class="seatRow">
      <ul>
        <li :class="{ active: selected.includes(index) }" v-for="(item, index) in 90" :key="index" @click="setSelected(index)"></li>
      </ul>
    </div>
    <!-- 开场信息 -->
    <div class="action-container">
      <p class="cinema-info">
        <span>坚如磐石</span>
        <span>
          切换场次
          <img src="/img/b1.png" alt="" />
        </span>
      </p>
      <p class="film-des">周四10月19日 09:30 国语2D</p>
      <ul class="selectedList">
        <li>
          <span>6排13座</span>
          <em>¥53</em>
          <mark></mark>
        </li>
        <li>
          <span>6排13座</span>
          <em>¥53</em>
          <mark></mark>
        </li>
      </ul>
    </div>

    <!-- 选做按钮 -->
    <div :class="{ 'confirm-btn': true, disable: selected.length === 0 }">
      <span @click="doPay">立即支付</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sid'],
  data() {
    return {
      selected: []
    }
  },
  methods: {
    setSelected(index) {
      let selected = new Set(this.selected)
      if (selected.has(index)) {
        selected.delete(index)
      } else {
        selected.add(index)
      }
      this.selected = [...selected]
    },
    doPay() {
      // 支付
      // 选中哪个影院的哪个场次的哪个座位号的电影  id号 => 座次id号
      // 价格，数量
      // 10 * 2 100   20 / ====> 座次号->相关信息 价格 * 2  20 表示当前你提交订单是合法的
      // 后端就会呼叫支付平台[post/get]，进行金额的提交，让用户在前端能进行支付
      // 用户支付成功后，平台返回哪个，同步结果，异步结果
      // 同步结果用户给用户立刻反馈，让界面有所变化，异步是用于给后端记录用的，它最可靠的
      // 后端还要主动的根据你提交给支付平台的订单号进行主动验签
      this.$dialog({
        title: '支付确认',
        message: '支付成功',
        beforeClose: (action, done) => {
          done()
          this.$router.replace('/center')
        }
      })
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  background: #f4f4f4;
  font-size: 17px;
}

.index-title {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
}

.index-title .city {
  margin-left: 15px;
  display: flex;
  justify-content: center;
  font-size: 12px;
  align-items: center;
}

.index-title .city img {
  width: 11px;
  height: 18px;
  padding-left: 5px;
}

/* 消息提示 */
.notice-message {
  padding: 10px 10px 10px 15px;
  margin-top: 44px;
  background: #fbf4d8;
  color: #e68e1a;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notice-message p {
  display: flex;
  align-items: center;
}

.notice-message .mess {
  width: 14px;
  height: 14px;
  margin-right: 5px;
  flex-shrink: 0;
  margin-bottom: 1px;
}

.notice-message .bot {
  flex-shrink: 0;
  width: 12px;
  height: 7px;
  border: 5px solid transparent;
}

.notice-message p:first-child {
  display: flex;
  width: 70%;
}

.notice-message p:first-child span {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.action-container {
  position: fixed;
  bottom: 45px;
  left: 0;
  right: 0;
  background-color: #ffffff;
  padding: 10px;
  z-index: 2;
  border-radius: 4px;
  padding: 15px;
  margin: 10px;
}

.cinema-info {
  display: flex;
  justify-content: space-between;
  color: #191a1b;
  font-size: 15px;
  line-height: 21px;
}

.cinema-info span:last-child {
  display: flex;
  line-height: 20px;
  color: #ff5f16;
  font-size: 13px;
  align-items: center;
}

.cinema-info span:last-child img {
  width: 12px;
  height: 7px;
  margin-left: 2px;
}

.film-des {
  font-size: 13px;
  line-height: 19px;
  margin-top: 4px;
  color: #797d82;
}

/* 座位表 */
.seatRow {
  display: flex;
  justify-content: center;
}

.seatRow ul {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  justify-content: center;
}

.seatRow ul li {
  width: 19px;
  height: 19px;
  margin: 0 6px 8px 0;
  border: 1px solid #af7bff;
  border-radius: 5px;
}

.seatRow ul .active {
  background: #00cb8f;
  border: 1px solid #00cb8f;
}

.selectedList {
  margin-top: 20px;
  display: flex;
}

.selectedList li {
  box-sizing: border-box;
  min-width: 81px;
  height: 45px;
  line-height: 17px;
  margin-right: 10px;
  padding: 0 20px 0 10px;
  border-radius: 4px;
  background: #f6f6f6;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
}
.selectedList li span {
  display: block;
}
.selectedList li mark {
  position: absolute;
  top: 50%;
  right: 0;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  background: url(http://localhost:8080/img/no.png) no-repeat 2px;
  background-size: 8px 8px;
}
.selectedList em {
  font-style: normal;
}

/* 选做按钮 */
.confirm-btn {
  height: 45px;
  width: 100%;
  font-size: 15px;
  line-height: 21px;
  padding: 14px 0;
  text-align: center;
  background-color: #ff5f16;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  color: #fff;
  z-index: 2;
  box-sizing: border-box;
}

.disable span {
  opacity: 0.3;
}
</style>
