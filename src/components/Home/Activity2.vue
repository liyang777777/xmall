<template>
  <!-- 活动版块2 -->
  <div class="box">
    <div v-for="(item,index) in activity2" :key="index" class="box1">
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
    activity2: {
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    enter() {}
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.img {
  width: 100%;
  height: 100%;
  border-radius: 3%;
}
</style>