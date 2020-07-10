<template>
  <!-- 热门商品 -->
  <div>
    <div style="background:#eee;padding: 20px">
      <Card :bordered="false">
        <p slot="title">热门商品</p>
        <div v-for="(item,index) in products" :key="index">
          <img :src=item.picUrl class="img" />
          <div>{{item.productName}}</div>
          <div>{{item.subTitle}}</div>
          <div>
              <div class="">￥{{item.salePrice}}.00</div>
              <div class="">
                <Button type="primary" >查看详情</Button>
                <Button type="primary" >加入购物车</Button>
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
.products {
  position: relative;
  top: 30px;
  margin-left: 149px;
}
.products1 {
  width: 1220px;
  height: 60px;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
  background: linear-gradient(#fbfbfb, #ececec);
}
.products2 {
  width: 609px;
  height: 430px;
  background: white;
}
.products2:hover {
  margin-top: -3px;
  box-shadow: 2px 2px 10px;
}
.products3 {
  font-size: 18px;
}
.products4 {
  position: absolute;
  left: 180px;
  margin-top: -25px;
  display: none;
}
.products2:hover .products4 {
  display: block;
}
</style>