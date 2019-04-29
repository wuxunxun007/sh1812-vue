<template>
  <div class="box">
    <header class="header">首页</header>
    <div class="content">
      <div class="banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item>1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
      </div>
      {{ bannerlist }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import { mapState } from 'vuex'
Vue.use(Swipe, SwipeItem)
export default {
  computed: {
    ...mapState({
      bannerlist: (state) => {
        return state.home.bannerlist
      },
      // prolist: state => state.home.prolist
      prolist: ({home}) => home.prolist
    })
  }
}
</script>

<style lang="scss">
.banner {
  height: 1.5rem;
  border-bottom: 1px solid #ccc;
}
</style>
