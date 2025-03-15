// import Vue from 'vue'
// import { Button, Rate } from 'vant'
// import 'vant/lib/button/style'
// import 'vant/lib/rate/style'
// Vue.use(Button)
// Vue.use(Rate)

import Vue from 'vue'
import {
  Button,
  Rate,
  Tabbar,
  TabbarItem,
  Icon,
  Tab,
  Tabs,
  Lazyload,
  List,
  Cell,
  Toast,
  Divider,
  DropdownMenu,
  DropdownItem,
  Tag,
  Skeleton,
  Search,
  IndexBar,
  IndexAnchor,
  Swipe,
  SwipeItem,
  Dialog,
  Form,
  Field,
  CountDown,
  ImagePreview,
  Empty
} from 'vant'
;[
  Button,
  Rate,
  Tabbar,
  TabbarItem,
  Icon,
  Tab,
  Tabs,
  List,
  Cell,
  Toast,
  Divider,
  DropdownMenu,
  DropdownItem,
  Tag,
  Skeleton,
  Search,
  IndexBar,
  IndexAnchor,
  Swipe,
  SwipeItem,
  Dialog,
  Form,
  Field,
  CountDown,
  ImagePreview,
  Empty
].forEach((cmp) => Vue.use(cmp))

// 图片懒加载引入
Vue.use(Lazyload, {
  // 加载时它的图片
  loading: 'https://img01.yzcdn.cn/vant/custom-empty-image.png',
  // 加载失败时显示的图片
  error: 'https://img01.yzcdn.cn/vant/custom-empty-image.png',
  lazyComponent: true
})
