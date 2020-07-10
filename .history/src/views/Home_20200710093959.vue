<template>
  <!-- 首页 -->
  <div>
    <div>
      <Rotation :rotation="rotation"></Rotation>
    </div>
    <div>
      <Activity :activity="activity"></Activity>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Rotation from "../components/Home/Rotation";
import Activity from "../components/Home/Activity "
import Products from "../components/Home/Products"
export default {
  name: "",
  props: {},
  components: {
    Rotation,
    Activity
  },
  data() {
    return {
      rotation: [],
      activity: [],
Products: []
    };
  },
  methods: {},
  mounted() {
    this.$api
      .home()
      .then(res => {
        console.log(res.data);
        this.rotation = res.data[0].panelContents;//首页轮播图
        // console.log(this.rotation);
        this.activity = res.data[1].panelContents//活动版块1
        // console.log(this.activity);
        this.
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