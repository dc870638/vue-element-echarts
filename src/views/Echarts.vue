<!--  -->
<template>
  <div class="hello">
    <transition name="slide-fade">
      <div id="chart1" v-show="isShow"></div>
    </transition>
    <button>展示/隐藏</button>
    <div id="chart2"></div>

    <transition name='fade'
    enter-active-class="animated swing"  
	 leave-active-class="animated bounce"
    >
      <div v-show="nowShow" class="fadeInUp">这是一个块级区域</div>
    </transition>
    <button @click="getClass">点击</button>
  </div>
</template>
<script>
export default {
  name: "echarts",
  components: {},
  data() {
    return {
      isShow: true,
      nowShow: true
    };
  },
  mounted() {
    this.$chart.line1("chart1");
    this.$chart.chart2("chart2");
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    getClass() {
      this.nowShow = !this.nowShow;
    }
  },
  computed: {},
  watch: {}
};
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}

#chart1 {
  width: 300px;
  height: 300px;
}
#chart2 {
  width: 300px;
  height: 300px;
}
</style>