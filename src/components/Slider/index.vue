<template>
    <div class='slider'>
      <el-menu
            :default-active="activeRouter"
            class="slider-menu"
            router>
            <template v-for="(item, index) in menuList">
                <el-submenu :key="index" v-if="item.children" :index="index+''">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item :index="subitem.url" v-for="(subitem, subindex) in item.children" :key="subindex">
                        <span slot="title">{{subitem.name}}</span>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item :index="item.url" :key="index" v-else>
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        menuList: [
          {
            name: 'home',
            url: '/home',
            icon: 'el-icon-document'
          },
          {
            name: 'Vue',
            icon: 'el-icon-news',
            title: 'large',
            children: [
              {
                name: 'vuex',
                url: '/vuex',
                icon: 'el-icon-document'
              }
            ]
          },
          {
            name: 'React',
            icon: 'el-icon-edit',
            children: [
              {
                name: 'react',
                url: '/react',
                icon: 'el-icon-document'
              }
            ]
          },
          {
            name: 'dva',
            url: '/dva',
            icon: 'el-icon-printer'
          },
          {
            name: 'Ag',
            url: '/Ag',
            icon: 'el-icon-edit-outline'
          },
          {
            name: 'ele',
            url: '/ele',
            icon: 'el-icon-goods'
          },
        ]
      }
    },
    computed: {
      activeRouter () {
        let route = this.$route.path.split('/')[this.$route.path.split('/').length - 1]
        return `/${route}`
      }
    },
    methods: {},
    created () {
    }
  }
</script>

<style lang="less" scoped>
    @import "./../../common/styles/mixins.less";
    .slider{
      &-menu{
        min-height: 100%;
          overflow: hidden;
          .el-menu-item{
              font-weight: 700;
              color: #496A6A;
          }
          .is-active{
              color: #00b1b3;
              background: #E4F0F1;
          }
          .is-opened{
              /* background-color: #E4F0F1; */
          }
          .el-submenu__title{
              color: #496A6A !important;
          }
      }
    }
</style>
