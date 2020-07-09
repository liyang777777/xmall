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
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>