<template>
  <div>
    <!-- 登录的logo -->
    <div class="login-logo">
      <img src="/img/logo.19ca0be.png" alt="" />
    </div>
    <!-- 表单内容输入 -->
    <div class="login-form">
      <van-form @submit="onSubmit" :show-error="false">
        <!-- :rules="[{ required: true, message: '请填写账号' }]" -->
        <van-field
          v-model="username"
          name="username"
          label="账号"
          placeholder="请填写账号"
          :rules="[
            {
              validator: validatorUsername,
              message: '账号不合法'
            }
          ]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="请填写密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button color="#ff5f16" block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'admin',
      password: 'admin888'
    }
  },
  methods: {
    onSubmit(values) {
      console.log('表单提交', values)
    },
    validatorUsername(value, rule) {
      // 同步代码块
      // if (!value) {
      //   return false
      // }
      // if (value.length < 3) {
      //   return false
      // }
      // return true

      // 它可以在异步请求中进行验证
      return new Promise(resolve => {
        if (value && value.length >= 3) {
          return resolve(true)
        } else {
          return resolve(false)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
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
