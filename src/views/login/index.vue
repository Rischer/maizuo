<template>
  <div>
    <!-- 登录的logo -->
    <div class="login-logo">
      <img src="/img/logo.19ca0be.png" alt="" />
    </div>
    <!-- 表单内容输入 -->
    <div class="login-form">
      <van-form @submit="onSubmit" :show-error="false">
        <van-field
          v-model="phone"
          name="phone"
          center
          clearable
          label="手机号"
          placeholder="请输入短信验证码"
          :rules="[
            {
              validator: validatorPhone,
              message: '手机号码不合法'
            }
          ]"
        >
          <template #button>
            <div class="send-sms-btn">
              <div @click="clickSendSms" size="small" type="primary" v-show="!showtime">发送验证码</div>
              <div v-show="showtime">
                <van-count-down :time="time" format="ss 秒" @finish="finish" />
              </div>
            </div>
          </template>
        </van-field>

        <van-field v-model="verify" name="verify" label="验证码" placeholder="请填写验证码" :rules="[{ required: true, message: '请填写验证码' }]" />
        <div style="margin: 16px">
          <van-button color="#ff5f16" block type="info" native-type="submit">用户登录</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { sendSmsApi, doLoginApi } from '@/api/userApi'
export default {
  data() {
    return {
      phone: '13252352325',
      verify: '',
      time: 61000,
      showtime: false
    }
  },
  methods: {
    async onSubmit(values) {
      // console.log('表单提交', values)
      const ret = await doLoginApi(values)
      // 登录成功
      if (ret.code === 0) {
        // 登录成功需要把信息存储于vuex中，vuex需要对此信息做持久化
        this.$store.commit('user/setUserInfo', ret.data)
        // this.$router.replace('/films/nowPlaying')
        this.$router.replace(this.$store.state.url)
      } else {
        this.$toast({
          message: '手机验证码不正确，请重新输入',
          duration: 30000
        })
      }
    },
    validatorPhone(value, rule) {
      if (!value) {
        return false
      }
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return false
      }
      return true
    },
    finish() {
      console.log('倒计时，到达了指定的时长')
      this.showtime = false
    },
    async clickSendSms() {
      this.showtime = true
      // 在有发送短信功能的业务，到此处就可以等着收短信了
      let ret = await sendSmsApi(this.phone)
      console.log(ret.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.send-sms-btn {
  width: 78px;
}
.van-button {
  width: 100%;
}
.van-count-down {
  color: #969799;
}
/* 登录的logo */
.login-logo {
  margin: 79px auto 40px;
  text-align: center;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: center;
}

.login-logo img {
  height: 60px;
}

/* 表单模块 */

.login-form p {
  line-height: 55px;
  margin: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
}

.login-form .input-control {
  height: 15px;
  line-height: 15px;
  padding: 20px 0;
  width: 100%;
  font-size: 15px;
  color: #191a1b;
  border: 0;
  outline-width: 0;
}

.login-form .sms-code {
  line-height: 30px;
  width: 90px;
  text-align: right;
  float: right;
  font-size: 13px;
  border-radius: 3px;
  cursor: pointer;
  color: #bdc0c5 !important;
}

.login-form .sub {
  line-height: 45px;
  font-size: 16px;
  margin: 70px 25px 0;
  border-radius: 3px;
  text-align: center;
  background-color: #ff5f16;
  height: 44px;
  color: #fff;
  border: none;
}

.login-form .sub input {
  width: 100%;
  height: 100%;
  border: 0;
  background: none;
  color: #fff;
  font-size: 16px;
  opacity: 0.3;
}

.cannot-receive-code {
  text-align: right;
  margin: 15px 25px 0;
  color: #797d82;
  font-size: 13px;
  display: block;
  font-weight: normal;
}
</style>
