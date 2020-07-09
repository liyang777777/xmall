<template>
  <!-- 活动版块1 -->
  <div>
    <div class="Activity">
      <div v-for="(item,index) in activity" :key="index">
         <Card style="width:320px">
        <div style="text-align:center">
            <img src="../../images/logo.png">
           
    </Card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    activity: {
      type: Array
    }
  },
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