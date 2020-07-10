<template>
  <!-- 热门商品 -->
  <div>
    <div style="background:#eee;padding: 20px">
      <Card :bordered="false">
        <p slot="title">热门商品</p>
        <div v-for="(item,index) in products" :key="index">
          <img :src=item.picUrl class="img" />
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
     products: {
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