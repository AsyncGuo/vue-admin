<template>
  <div class="component-pagination">
    <div class="pagination-box">
      <i
        class="pagination-prev iconfont icon-xiangzuojiantou"
        :class="{disable : firstPage}"
        @click='pageChange(currentPage - 1)'
      ></i>
      <ul class="pagination-pages">
        <li
          class="pagination-page"
          :class="{active: 1 === currentPage}"
          v-if="totalPage > 0"
          @click='pageChange(1)'
          >1</li>
        <li
          class="pagination-more"
          v-if="showPrevMore"
          @click='clickPrevMore'
          >&nbsp; ... &nbsp;</li>
        <li
          class="pagination-page"
          v-for="(page, index) in pages"
          :class="{active: page === currentPage}"
          @click='pageChange(page)'
          >{{page}}
          </li>
        <li
          class="pagination-more"
          v-if="showNextMore"
          @click='clickNextMore'
          >&nbsp; ... &nbsp;</li>
        <li class="pagination-page" @click='pageChange(totalPage)'>
          {{totalPage}}
        </li>
      </ul>
      <i class="pagination-next iconfont icon-xiangyoujiantou"
        :class="{disable : lastPage}"
        @click='pageChange(currentPage + 1)'
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalPage: Number
  },
  data () {
    return {
      currentShowPage: this.currentPage,
      showPrevMore: false,
      showNextMore: false
    }
  },
  computed: {
    pages () {
      let pageCount = 7
      let pageLen = this.totalPage
      let currentPage = this.currentShowPage
      let showPrevMore = false
      let showNextMore = false

      if (pageLen > pageCount) {
        if (currentPage > pageCount - 2) {
          showPrevMore = true
        }
        if (currentPage < pageLen - 4) {
          showNextMore = true;
        }
      }

      let pageArr = []
      if (showPrevMore && !showNextMore) {
        const startPage = pageLen - (pageCount - 2)
        for (let i = startPage; i < pageLen; i++) {
          pageArr.push(i)
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pageCount; i++) {
          pageArr.push(i)
        }
      } else if (showPrevMore && showNextMore) {
        const offset = Math.floor(pageCount / 2) - 1
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          pageArr.push(i)
        }
      } else {
        for (let i = 2; i < pageLen; i++) {
          pageArr.push(i)
        }
      }
      this.showPrevMore = showPrevMore
      this.showNextMore = showNextMore
      return pageArr
    },
    lastPage () {
      return this.currentPage === this.totalPage
    },
    firstPage () {
      return this.currentPage === 1
    }
  },
  methods: {
    pageChange (page) {
      if (page === this.currentPage) return
      this.currentShowPage = page
      this.$emit('pageChange', page)
    },
    clickPrevMore () {
      let page = this.currentShowPage - 5
      if (this.currentShowPage < 1) page = 1
      this.currentShowPage = page
    },
    clickNextMore () {
      let page = this.currentShowPage + 5
      if (this.currentShowPage > this.totalPage) page = this.totalPage
      this.currentShowPage = page
    }
  }
}
</script>

<style lang="less" scoped>
  .component-pagination{
    padding: 20px 0;
    .pagination-prev,
    .pagination-next,
    .pagination-more,
    .pagination-page{
      cursor: pointer;
      &:hover{
        color: #212121;
      }
    }
    .pagination-box{
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      color: #00b1b3;
      .iconfont{
        padding: 5px 10px;
        &.disable{
          color: #eee;
          pointer-events:none;
        }
      }
    }
    .pagination-pages{
      max-width: 70%;
      display: flex;
      font-size: 13px;
      flex-wrap:wrap;
    }
    .pagination-page{
      height: 22px;
      line-height: 22px;
      padding: 0 5px;
      text-align: center;
      &.active{
        color: #212121;
      }
    }
  }
</style>
