<template>
<!-- 公共组件 -->
  <div>
    <div class="All">
      <div class="title">M</div>
      <div class="inp">
        <Input search placeholder="请输入商品信息" />
      </div>
      <div class="App1">全部商品</div>
      <div class="App2">捐赠</div>
      <div class="App3">|</div>
      <div class="icon1">
        <Icon type="ios-person" />
      </div>
      <div class="icon2">
        <Icon type="md-cart" />
      </div>
      <div class="btn">0</div>
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
  background: rgb(4, 4, 4);
  display: flex;
}
.title {
  width: 70px;
  height: 50px;
  font-size: 30px;
  font-weight: 999;
  margin-left: 50px;
  margin-top: 25px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  background: cornsilk;
}
.inp {
  width: 300px;
  height: 50px;
  margin-top: 35px;
  margin-left: 350px;
}
.App1 {
  width: 100px;
  height: 50px;
  margin-left: 50px;
  margin-top: 40px;
  font-size: 18px;
} 
.App1:hover {
  color: aliceblue;
}
.App2 {
  width: 100px;
  height: 50px;
  margin-left: 50px;
  margin-top: 40px;
  font-size: 18px;
}
.App2:hover {
  color: aliceblue;
}
.App3 {
  width: 100px;
  height: 50px;
  margin-left: 50px;
  margin-top: 40px;
  font-size: 18px;
}
.icon1 {
  width: 100px;
  height: 50px;
  font-size: 30px;
  margin-left: 40px;
  margin-top: 30px;
}
.icon1:hover {
  color: aliceblue;
}
.icon2 {
  width: 100px;
  height: 50px;
  font-size: 30px;
  margin-left: 40px;
  margin-top: 30px;
}
.icon2:hover {
  color: aliceblue;
}
.btn {
  width: 50px;
  height: 50px;
  margin-top: 45px;
  font-size: 18px;
  margin-left: -50px;
}
.box {
  width: 1360px;
  height: 100px;
  background: rgb(248, 248, 248);
  display: flex;
  
}
.box1 {
  width: 120px;
  height: 50px;
  margin-left: 40px;
  margin-top: 35px;
  font-size: 18px;
}
.box1:hover {
  color: blue;
}
.box2 {
  width: 120px;
  height: 50px;
  margin-left: -50px;
  margin-top: 35px;
  font-size: 18px;
}
.box2:hover {
  color: blue;
}
.box3 {
  width: 120px;
  height: 50px;
  margin-left: -50px;
  margin-top: 35px;
  font-size: 18px;
}
.box3:hover {
  color: blue;
}
.box4 {
  width: 120px;
  height: 50px;
  margin-left: -15px;
  margin-top: 35px;
  font-size: 18px;
}
.box4:hover {
  color: blue;
}
.box5 {
  width: 120px;
  height: 50px;
  margin-left: -10px;
  margin-top: 35px;
  font-size: 18px;
}
.box5:hover {
  color: blue;
}
.box6 {
  width: 140px;
  height: 50px;
  margin-left: 25px;
  margin-top: 35px;
  font-size: 18px;
}
.box6:hover {
  color: blue;
}
.box7 {
  width: 140px;
  height: 50px;
  margin-left: 15px;
  margin-top: 35px;
  font-size: 18px;
}
.box7:hover {
  color: blue;
}
.box8 {
  width: 120px;
  height: 50px;
  margin-left: 5px;
  margin-top: 35px;
  font-size: 18px;
}
.box8:hover {
  color: blue;
}
.box9 {
  width: 120px;
  height: 50px;
  margin-left: -30px;
  margin-top: 35px;
  font-size: 18px;
}
.box9:hover {
  color: blue;
}
.box10 {
  width: 120px;
  height: 50px;
  margin-left: -50px;
  margin-top: 35px;
  font-size: 18px;
}
.box10:hover {
  color: blue;
}
</style>