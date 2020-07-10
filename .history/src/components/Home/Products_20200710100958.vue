<template>
  <!-- 热门商品 -->
  <div class="products">
    <div class="products1 d-f a-i-c">
      <div class="m-l2 f-s18">{{obj.name}}</div>
    </div>
    <div class="d-f products5">
      <Card v-for="(item,index) in arr1" :key="index" class="products2">
        <div style="text-align:center">
          <div class="picture">
            <img :src="item.picUrl" alt width="206" height="206" class="m-t1" />
            <div class="m-t1 products3">{{item.productName}}</div>
            <div class="m-t1 f-c-h f-s12">{{item.subTitle}}</div>
            <div>
              <div class="f-c-h f-s18 f-w m-t1">￥{{item.salePrice}}.00</div>
              <div class="d-f products4">
                <Button class="products6">查看详情</Button>
                <Button type="primary" class="m-l1">加入购物车</Button>
              </div>
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
    arr1: {
      type: Array,
      default: () => []
    },
    obj: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  components: {},
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
