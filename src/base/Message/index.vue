<template>
    <transition name='component-message'>
        <div class='component-message-box' :style='styleInfo'>
            <div class='component-message-inner' :class='classType'>
                <i class="iconfont" :class='classIcon'></i>
                <span class='component-message-text'>{{text}}</span>
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    props: ['text', 'type', 'styleInfo'],
    data () {
      return {}
    },
    computed: {
      classType () {
        if (this.type === 'success') {
          return 'success'
        }
        if (this.type === 'error') {
          return 'error'
        }
        if (this.type === 'warn') {
          return 'warn'
        }
        if (this.type === 'info') {
          return 'info'
        } else {
          return 'error'
        }
      },
      classIcon () {
        if (this.type === 'success') {
          return 'icon-tick-hollow'
        }
        if (this.type === 'error') {
          return 'icon-close-hollow'
        }
        if (this.type === 'warn') {
          return 'icon-warn'
        }
        if (this.type === 'info') {
          return 'icon-info-hollow'
        } else {
          return 'icon-close-hollow'
        }
      }
    },
    methods: {},
    created () {
    }
  }
</script>

<style lang="less" scoped>
    .component-message-box{
        position: absolute;
        z-index: 999;
        top: 30px;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        transition:all ease .3s;
        .component-message-inner{
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 70%;
            padding: 8px 15px;
            background-color: #fff;
            box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);
            border-radius:3px;
            &.success{ background-color: rgb(234, 246, 234) }
            &.error{ background-color: rgb(254, 233, 231) }
            &.warn{ background-color: rgb(255, 243, 225) }
            &.info{ background-color: rgb(229, 243, 254) }
            .iconfont{
                width: 16px;
                height:16px;
                font-size: 16px;
                color:#f50
            }
            .icon-tick-hollow{
                color:#87d068
            }
            .icon-info-hollow{
                color:#2db7f5
            }
            .icon-close-hollow{
                color:#f50
            }
            .icon-warn-hollow{
                color:#fa0
            }
            .component-message-text{
                display: flex;
                font-size: 12px;
                font-weight: normal;
                padding-left:5px;
                line-height:1.5;
                color:#666;
            }
        }
    }
    .component-message-enter-active, .component-message-leave-active{
        transition: all 150ms ease;
    }
    .component-message-enter, .component-message-leave-active {
        opacity: 0;
        transform:translate3d(0,-30px,0);
    }
</style>
