<template>
  <div class="car">
    <pagination :current-page="currentPage" :total-page="totalPage" @pageChange="getPost"></pagination>
    <text-scroll :datalist="data" scrollType="scroll-up"></text-scroll>
    <button type="button" @click="showModal" name="button">点击显示模态框</button>
    <modal
      title="Asyncguo"
      :show="show"
      @close="show = false"
      >
      <div class="modal-slot">
        归来依旧是少年
      </div>
    </modal>
    <!-- <loading title="loadings" mode="full"></loading> -->
  </div>
</template>

<script>
import Pagination from '@/base/Pagination'
import Modal from '@/base/Modal'
import Loading from '@/base/Loading'
import TextScroll from '@/base/TextScroll'
import Message from '@/base/Message'

export default {
  components: {
    Pagination,
    TextScroll,
    Modal,
    Loading,
    Message
  },
  data () {
    return {
      show: false,
      currentPage: 1,
      totalPage: 121,
      data: [
              {id: 1, text: '1'},
              {id: 2, text: '2'},
              {id: 3, text: '3'},
              {id: 4, text: '4'}
            ]
    }
  },
  methods: {
    showModal () {
      this.show = true
    },
    getPost (page) {
      this.currentPage = page
    }
  }
}
</script>

<style lang="less" scoped>
    .modal-slot{
        font-size: 15px;
    }
</style>
