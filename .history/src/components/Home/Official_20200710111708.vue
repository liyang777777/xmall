<template>
  <!-- 官方精选 -->
  <div class="All">
    <div class="Official">
      <div class="title">官方精选</div>
      <div class="List">
        <div v-for="(item,index) in Official" :key="index" class="List1" :class="'List1'+index">
          <div class="picture">
            <img :src="item.picUrl" alt class="picture" />
          </div>
          <div class="productName">{{item.productName}}</div>
          <div class="subTitle">{{item.subTitle}}</div>
          <div class="salePrice">￥{{item.salePrice}}.00</div>
          <div class="btn">
            <span class="see">
              <Button @click="gotoDetails(item)">查看详情</Button>
            </span>
            <span>
              <Button type="primary">加入购物车</Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    Official: {
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>