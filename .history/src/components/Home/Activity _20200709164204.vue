<template>
  <!-- 活动版块1 -->
  <div>
    <div v-if="(item,index) in activity" :key="index">
      <Card style="width:320px">
        <div style="text-align:center">
          <img src="../../images/logo.png" />
          <h3>A high quality UI Toolkit based on Vue.js</h3>
        </div>
      </Card>
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
</style>