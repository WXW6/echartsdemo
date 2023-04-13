<template>
  <div class="panel" ref="panels">
    <h2>{{ chartsTitle }}</h2>
    <div class="chart" ref="charts"></div>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
import { EleResize } from "../utils/esresize";
export default {
  name: "Panel",
  props: { option: Object, chartsTitle: String },
  methods: {
    getEchartsData() {
      var charts = this.$echarts.init(this.$refs.charts);
      // const resizeDiv = this.$refs.panels;
      charts.setOption(this.option);

      // 让图表跟随屏幕自适应
      // 第一种
      // window.onresize = function () {
      //   charts.resize();
      // };
      // 第二种;
      // let sizeFun = function () {
      //   charts.resize();
      //   console.log("addEventListener被调用了");
      //   // location.reload();
      // };
      // window.addEventListener("resize", sizeFun);
      // 第三种
      // let listener = function () {
      //   console.log("resize");
      //   charts.resize();
      // };
      // EleResize.on(resizeDiv, listener);
    },
  },
  mounted() {
    this.getEchartsData();
  },
};
</script>

<style lang="scss" scoped>
.panel {
  position: relative;
  height: 3.875rem;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: url(../assets/line.png) rgba(255, 255, 255, 0.03);
  padding: 0 0.1875rem 0.5rem;
  margin-bottom: 0.1875rem;
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-left: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
  }
  &::after {
    position: absolute;
    right: 0;
    top: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
  }
  h2 {
    height: 0.6rem;
    color: #fff;
    font-size: 0.25rem;
    line-height: 0.6rem;
    text-align: center;
  }
  .chart {
    height: 3rem;
  }
}
.panel-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  &::before {
    position: absolute;
    left: 0;
    bottom: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-left: 2px solid #02a6b5;
    border-bottom: 2px solid #02a6b5;
  }
  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-bottom: 2px solid #02a6b5;
  }
}
</style>