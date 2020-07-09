<template>
  <!-- 活动版块1 -->
  <div class="box">
    <div v-for="(item,index) in activity" :key="index" class="box1">
      <Card style="width:300px">
        <div style="text-align:center">
          <img :src="item.picUrl" class="img" @mouseenter="enter" />
        </div>
      </Card>
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
  methods: {
      enter() {

      }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
    width: 300px;
    height: 300px;
    display: flex;
}
</style>