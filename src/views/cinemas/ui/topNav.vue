<template>
  <div class="top-nav">
    <div class="navtitle">
      <div @click="leftClick">
        <span @click="goCity">{{ cname }}</span>
        <van-icon name="arrow-down" />
      </div>
      <div>{{ title }}</div>
      <div @click="rightClick">
        <van-icon name="search" />
      </div>
    </div>
    <van-dropdown-menu active-color="#ff5f16">
      <van-dropdown-item :title="showTitle" ref="refCity">
        <template #default>
          <div class="dropdown-select-city">
            <template v-for="item in option1">
              <van-tag :key="item.value" @click="selectCity(item.value)" plain size="large" :color="value1 === item.value ? '#ff5f16' : '#797d82'">
                {{ item.text }}
              </van-tag>
            </template>
          </div>
        </template>
      </van-dropdown-item>
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '影院'
    },
    loadCinemas: Function
  },
  data() {
    return {
      value1: 0,
      value2: 'a',
      value3: 'a',
      option1: [
        { text: '全城', value: 0 },
        { text: '上海', value: 310100 },
        { text: '北京', value: 110100 }
      ],
      option2: [
        { text: 'APP订票', value: 'a' },
        { text: '前台兑换', value: 'b' }
      ],
      option3: [
        { text: '最近去过', value: 'a' },
        { text: '离我最近', value: 'b' }
      ]
    }
  },
  computed: {
    showTitle() {
      const info = this.option1.find((item) => item.value === this.value1)
      return info ? info.text : '全城'
    }
  },
  // 侦听器的应用
  watch: {
    value1(val) {
      // console.log(val)
      this.loadCinemas(val)
    }
  },
  methods: {
    leftClick() {
      this.$emit('left')
    },
    rightClick() {
      this.$emit('right')
    },
    selectCity(cityid) {
      this.value1 = cityid
      this.$refs.refCity.toggle(false)
    },
    goCity() {
      this.$router.push('/city')
    }
  }
}
</script>

<style lang="scss" scoped>
.top-nav {
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  left: 0;
  background: white;
  .navtitle {
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    justify-content: space-between;
    color: #191a1b;
    div {
      &:first-child {
        font-size: 11px;
        > span {
          font-size: 13px;
        }
      }
      &:nth-of-type(2) {
        font-size: 17px;
        text-align: center;
      }
      &:last-child {
        font-size: 23px;
      }
    }
  }
}

.dropdown-select-city {
  padding: 10px;
  box-sizing: border-box;
  .van-tag--plain {
    margin-left: 10px;
    padding-left: 10px;
    padding-right: 10px;
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
