<template>
    <div class='component-loading'>
      <div
        :class="{
          'loading-fullscreen': mode === 'fullscreen',
          'loading-full': mode === 'full',
          'loading-absolute': mode === 'absolute',
          'loading': mode === 'normal'
          }"
        :style="wrapStyleObject"
        >
        <span class="loading-box">
          <em class="loading-title" v-if="title">{{title}}</em>
          <i
            class="loading-icon"
            :style="{
              'width': size + 'px',
              'height': size + 'px',
              'border-color': color,
              'border-right-color':'transparent'
              }"
            >
          </i>
        </span>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      mode: {
        type: String,
        default: 'normal'
      },
      color: {
        type: String,
        default:'#00B1B3'
      },
      size:{
        type: Number,
        default:24
      },
      autoSize:{
        type: Boolean,
        default:false
      },
      title:{
        type: String,
        default:''
      }
    },
    computed: {
      wrapStyleObject () {
        if (this.autoSize) {
          return {
            width:this.size + 'px',
            height:this.size + 'px'
          }
        }
      }
    },
  }
</script>

<style lang="less" scoped>
  .loading{
    position: relative;
    width: 100%;
    height: 45px;
    clear: both;
    &-box{
      position: absolute;
      left: 50%;
      top: 50%;
      text-align: center;
      padding: 10px;
      border-radius: 5px;
      transform: translate3d(-50%, -50%, 0);
    }
    &-title{
      font-size: 12px;
      font-weight: 500;
      padding: 0 0 8px 0;
      display: block;
      color: #212121;
    }
    &-icon{
      display: block;
      width: 24px;
      height: 24px;
      margin: 0 auto;
      border-top:2px solid #00B1B3;
      border-left:2px solid #00B1B3;
      border-bottom:2px solid #00B1B3;
      border-right:2px solid transparent;
      border-radius:50%;
      animation: loading 1s infinite linear;
    }
    @keyframes loading {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
    }
  }
  .loading-fullscreen{
    background:rgba(187, 187, 187, 0.37);
    position:absolute;
    z-index: 10000;
    top:0;
    left:0;
    bottom:0;
    width:100%;
    height:auto;
    transition:ease .3s all;
    transform:translate3d(0,0,0);
    clear: both;
    .loading-box{
      background-color: rgba(255, 255, 255, 0.33);
    }
  }
  .loading--full{
    position:absolute;
    z-index:100;
    top:0;
    left:0;
    bottom:0;
    width:100%;
    height:auto;
    transition:ease .3s all;
    transform:translate3d(0,0,0);
    clear: both;
  }
  .loading-absolute{
    position:absolute;
    width:100%;
    height: 45px;
    clear: both;
    top:10px;
    z-index:2;
  }
</style>
