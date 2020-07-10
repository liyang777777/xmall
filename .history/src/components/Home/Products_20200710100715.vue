<template>
  <!-- 热门商品 -->
  <div>
    <div style="background:#eee;padding: 20px">
      <Card :bordered="false">
        <p slot="title">热门商品</p>
        <div v-for="(item,index) in products" :key="index">
          <img :src="item.picUrl" class="img" />
          <div>{{item.productName}}</div>
          <div>{{item.subTitle}}</div>
          <div>
            <div class>￥{{item.salePrice}}.00</div>
            <div class>
              <Button type="primary">查看详情</Button>
              <Button type="primary">加入购物车</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    products: {
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