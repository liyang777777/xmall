<template>
  <div>
    <div class="All">
      <div class="title">M</div>
      <div class="inp">
        <Input search placeholder="请输入商品信息" />
      </div>
      <div class="box">
        <div class="box1">全部商品</div>
        <div class="box2">捐赠</div>
        <div class="box3">|</div>
      </div>
      <div class="icon1">
        <Icon type="ios-person" />
      </div>
      <div class="icon2">
        <Icon type="md-cart" />
      </div>
    </div>
    <div class="box">
      <div class="box1">. 首页</div>
      <div class="box2">. 全部</div>
      <div class="box3">. 品牌周边</div>
      <div class="box4">. 捐赠名单</div>
      <div class="box5">. 后台管理系统</div>
      <div class="box6">. XPay支付系统</div>
      <div class="box7">. XBoot开发平台</div>
      <div class="box8">. 宣传视频</div>
      <div class="box9">. Github</div>
      <div class="box10">. 商用授权</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
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
.All {
  width: 1360px;
height: 100px;
}
.box {
  width: 1360px;
  height: 50px;
  background: rgb(248, 248, 248);
  display: flex;
}
.box1 {
  width: 120px;
  height: 50px;
  margin-left: 30px;
  margin-top: 10px;
  font-size: 14px;
}
.box2 {
  width: 120px;
  height: 50px;
  margin-left: -65px;
  margin-top: 10px;
  font-size: 14px;
}
.box3 {
  width: 120px;
  height: 50px;
  margin-left: -65px;
  margin-top: 10px;
  font-size: 14px;
}
.box4 {
  width: 120px;
  height: 50px;
  margin-left: -35px;
  margin-top: 10px;
  font-size: 14px;
}
.box5 {
  width: 120px;
  height: 50px;
  margin-left: -35px;
  margin-top: 10px;
  font-size: 14px;
}
.box6 {
  width: 120px;
  height: 50px;
  margin-left: -5px;
  margin-top: 10px;
  font-size: 14px;
}
.box7 {
  width: 120px;
  height: 50px;
  margin-left: -5px;
  margin-top: 10px;
  font-size: 14px;
}
.box8 {
  width: 120px;
  height: 50px;
  margin-left: 5px;
  margin-top: 10px;
  font-size: 14px;
}
.box9 {
  width: 120px;
  height: 50px;
  margin-left: -30px;
  margin-top: 10px;
  font-size: 14px;
}
.box10 {
  width: 120px;
  height: 50px;
  margin-left: -50px;
  margin-top: 10px;
  font-size: 14px;
}
// .icon1 {
//   width: 100px;
//   height: 50px;
//   font-size: 30px;
//   margin-left: 290px;
// }
// .icon2 {
//   width: 100px;
//   height: 50px;
//   font-size: 30px;
//   margin-left: -35px;
// }
</style>