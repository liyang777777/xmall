<template>
  <!-- 首页 -->
  <div>
    <div>
      <Rotation :rotation="rotation"></Rotation>
    </div>
    <div>
      <Activity1 :activity1="activity1"></Activity1>
    </div>
    <div>
      <Products :products="products"></Products>
    </div>
    <div>
      <Official :official="official"></Official>
    </div>
    <div>
      <Brand :brand="brand"></Brand>
    </div>
    <div>
      <Around :around="around"></Around>
    </div>
    <div>
      <Activity2 :activity2="activity2"></Activity2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Rotation from "../components/Home/Rotation";
import Activity1 from "../components/Home/Activity1 ";
import Products from "../components/Home/Products";
import Official from "../components/Home/Official";
import Brand from "../components/Home/Brand";
import Around from "../components/Home/Around";
import Activity2 from "../components/Home/Activity2";

export default {
  name: "",
  props: {},
  components: {
    Rotation,
    Activity1,
    Products,
    Official,
    Brand,
    Around,
    Activity2
  },
  data() {
    return {
      rotation: [],
      activity1: [],
      products: [],
      official: [],
      brand: [],
      around: [],
      activity2: []
    };
  },
  methods: {},
  mounted() {
    this.$api
      .home()
      .then(res => {
        // console.log(res.data);
        this.rotation = res.data[0].panelContents; //首页轮播图
        // console.log(this.rotation);
        this.activity = res.data[1].panelContents; //活动版块1
        // console.log(this.activity);
        this.products = res.data[2].panelContents; //热门商品
        // console.log(this.products);
        this.official = res.data[3].panelContents; //官方精选
        // console.log(this.official);
         this.brand = res.data[4].panelContents; //品牌精选
        // console.log(this.official);
         this.around = res.data[5].panelContents; //品牌周边
        // console.log(this.official);
         this.activity2 = res.data[6].panelContents; //活动版块2
        // console.log(this.official);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>