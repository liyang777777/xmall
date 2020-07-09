<template>
  <!-- 首页 -->
  <div>
    <div>
      <Rotation :rotation = 'rotation'></Rotation>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Rotation from "../components/Home/Rotation";
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
  methods: {
    home() {
      this.$api.home().then(res => {
        this.rotation = res.data[0].panelContents
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>