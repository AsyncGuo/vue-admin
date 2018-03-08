<template>
    <div class='manage'>
      <headers class="manage-header"></headers>
      <div class="manage-content">
        <slider class="manage-slide"></slider>
        <div class="manage-box">
          <car></car>
        </div>
      </div>
    </div>
</template>

<script>
  import Headers from './../Headers'
  import Slider from './../Slider'
  import Car from './../Car'
  import  { mapGetters, mapActions }  from 'vuex'
  export default {
    components: {
      Headers,
      Slider,
      Car
    },
    data () {
      return {}
    },
    computed: {},
    methods: {
      ...mapActions([
        'showLoading',
        'hideLoading'
      ])
    },
    created () {
      this.showLoading()
      setTimeout(() => {
        this.hideLoading()
      }, 1000)
    }
  }
</script>

<style lang="less" scoped>
    @import "./../../common/styles/mixins.less";
    .manage{
      width: 100%;
      min-height: 100vh;
      &-header{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1000;
      }
      &-content{
        display: flex;
        width: 100%;
        position: absolute;
        top: 88px;
        bottom: 0;
      }
      &-slide{
        width: 200px;
        /* min-height: 100vh; */
        overflow-x: hidden;
        overflow-y: auto;
      }
      &-box{
        flex: 1;
        overflow-y: auto;
        padding: 20px;
        background-color: #fff;
      }
    }
</style>
