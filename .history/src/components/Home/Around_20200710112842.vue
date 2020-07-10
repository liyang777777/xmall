<template>
  <!-- 品牌周边 -->
  <div class="All">
    <div class="Official">
      <div class="title">官方精选</div>
      <div class="List">
        <div v-for="(item,index) in Official" :key="index" class="hotList" :class="'hotList'+index">
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
  methods: {
    gotoDetails(item) {
      // 另开一个网页打开路由并传参
      window.open("/details?productId=" + item.productId);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.All {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 550px;
  margin-top: 30px;
}
.Products {
  width: 1240px;
  height: 500px;
}
.picture {
  width: 220px;
  height: 220px;
}
.title {
  width: 100%;
  line-height: 50px;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 15px 15px 0 0;
  background: rgb(242, 242, 242);
  padding-left: 50px;
  font-size: 20px;
}
.hotList {
  width: 49.5%;
  height: 500px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hotList0 {
  border-radius: 0 0 0 15px;
  z-index: 1;
  &:hover {
    cursor: pointer;
    box-shadow: 15px 10px 10px -8px rgb(185, 183, 183);
    height: 495px;
    translate: 0 -20px 20px;
    transition: all 0.5s;
    .salePrice {
      display: none;
    }
    .btn {
      display: block;
    }
  }
}
.hotList1 {
  border-radius: 0 10px 15px 0;
  z-index: 1;
  &:hover {
    cursor: pointer;
    box-shadow: -15px 10px 10px -8px rgb(185, 183, 183);
    height: 495px;
    translate: 0px -20px 20px;
    transition: all 0.5s;
    .salePrice {
      display: none;
    }
    .btn {
      display: block;
    }
  }
}
.List {
  border: 1px solid rgb(194, 194, 194);
  border-radius: 0 0 15px 15px;
  display: flex;
  justify-content: space-between;
  background: white;
}
.productName {
  font-size: 20px;
  font-weight: 520;
  margin: 8px 0 5px 0;
}
.subTitle {
  color: rgb(199, 198, 198);
  margin-bottom: 20px;
}
.salePrice {
  font-size: 20px;
  font-weight: 600;
  color: red;
}
.btn {
  display: none;
}
.see {
  margin-right: 10px;
}
.ivu-btn {
  width: 100px !important;
}
</style>