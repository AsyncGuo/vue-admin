<template>
  <div id="app">
      <transition name="fade-in">
          <router-view></router-view>
      </transition>
      <message :text='msgTip.text' :type='msgTip.type' v-show='msgTip.show' :style-info='msgTip.style'></message>
      <loading mode="fullscreen" v-if="loading.loadingShow"></loading>
  </div>
</template>

<script>
  import Message from '@/base/Message'
  import Loading from '@/base/Loading'
  import  { mapGetters, mapActions }  from 'vuex'

  export default {
    name: 'app',
    components: {
      Message,
      Loading
    },
    computed: {
      ...mapGetters([
        'msgTip',
        'loading'
      ])
    },
    created () {
    }
  }
</script>

<style lang="less">
    @import "./common/styles/index.less";
    #app{
        width: 100%;
        min-height: 100%;
        .fade-in-enter-active, .fade-in-leave-active {
            transition: opacity .5s
        }
        .fade-in-enter, .fade-in-leave-to {
            opacity: 0
        }
    }
</style>
