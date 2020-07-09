<template>
  <!-- 活动版块1 -->
  <div>
    <div class="Activity">
      <div v-for="(item,index) in activity" :key="index">
        <div>
          <img :src="item.picUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    activity: {
      type: Arr
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