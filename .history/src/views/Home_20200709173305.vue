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
      activity: []
    };
  },
  methods: {},
  mounted() {
    this.$api
      .home()
      .then(res => {
        console.log(res.data);
        // this.rotation = res.data[0].panelContents;//首页轮播图
        // console.log(this.rotation);
        // this.activity = res.data[0].panelContents//活动版块1
        // console.log(this.activity);
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