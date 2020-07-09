<template>
  <!-- 首页轮播图 -->
  <div class="rotationAll">
    <div class="rotation">
      <Carousel autoplay v-model="value2" loop class="img" :autoplay-speed='autoplaySpeed'>
        <div class="pictureAll" v-for="item in rotation" :key="item.id">
          <CarouselItem>
            <img :src="item.picUrl" alt class="picture" />
            <img :src="item.picUrl2" alt class="picture2" />
            <img :src="item.picUrl3" alt class="picture3" />
          </CarouselItem>
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    rotation: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
      value2: 0,
      autoplaySpeed:4000
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.rotationAll {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 520px;
  z-index: -1;
}
.rotation {
  width: 1240px;
  // margin-top: 20px;
  height: 500px;
  border-radius: 15px;
}
.picture {
  position: relative;
  top: 15px;
  width: 100%;
  border-radius: 15px;
  height: 510px;
  border: 1px solid rgb(237,237,237);
}

.picture2 {
  position: relative;
  height: 515px;
  width: 100%;
  top: -510px;
  z-index: 1;
  border-radius: 15px;
}
.picture3 {
  position: relative;
  height: 500px;
  width: 100%;
  top: -1050px;
  border-radius: 15px;
}
.img {
  width: 100%;
  height: 500px;
}
</style>