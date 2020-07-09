<template>
  <!-- 首页 -->
  <div>
    <div>
      <Rotation :rotation="rotation"></Rotation>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Rotation from "../components/Home/Rotation";
import Activity from "../components/Home/Activity"
export default {
  name: "",
  props: {},
  components: {
    Rotation
  },
  data() {
    return {
      rotation: []
    };
  },
  methods: {},
  mounted() {
    this.$api
      .home()
      .then(res => {
        this.rotation = res.data[0].panelContents;
        // console.log(this.rotation);
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