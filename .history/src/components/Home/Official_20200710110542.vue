<template>
  <!-- 官方精选 -->
  <div class="All">
    <div class="Official">
      <div class="title">官方精选</div>
      <div class="List">
<div v-for="(item,index) in Official" :key="index" class="List1" :class="'List1'+index">
<div class="picture">
<img :src="item.picUrl" alt="" class="picture">
</div>
</div>
      </div>
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