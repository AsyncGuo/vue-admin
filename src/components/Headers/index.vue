<template>
    <div class='header'>
      <div class="header-name">
        基于vue的后台管理系统
      </div>
      <ul class="header-items">
        <li class="header-items-icon">
          <img src="https://avatars2.githubusercontent.com/u/23313807?s=400&u=e0de67c8955ac766fe8cf0d1d3d1e103b8bb92a4&v=4" alt="avatars" class="avatar">
        </li>
        <li class="header-items-logout">
          <span>退出</span>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {}
    },
    computed: {},
    methods: {},
    created () {
    }
  }
</script>

<style lang="less" scoped>
    @import "./../../common/styles/mixins.less";
    .header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 23px;
      width: 100%;
      height: 88px;
      background-color: #00b1b3;
      box-sizing: border-box;
      &-name{
        color: #fff;
        font-size: 18px;
      }
      &-items{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &-icon{
          width: 39px;
          height: 39px;
          .avatar{
            width: 100%;
            height: 100%;
            background-color: #eee;
            border-radius: 50%;
            cursor: pointer;
          }
        }
        &-logout{
          padding-top: 10px;
          cursor: pointer;
          color: #fff;
        }
      }
    }
</style>
