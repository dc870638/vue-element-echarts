<!--  -->
<template>
  <div class="hello">
    <div id="chart1"></div>
    <div id="chart2"></div>
  </div>
</template>
<script>
export default {
  name: "echarts",
  components: {},
  data() {
    return {};
  },
   mounted() {
    this.$chart.line1('chart1');
    this.$chart.chart2('chart2')
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style scoped>
#chart1 {
    width: 300px;
    height: 300px;
  }
  #chart2 {
    width: 300px;
    height: 300px;
  }
</style>