<template>
  <div class="header">
    <h1>数据可视化-ECharts</h1>
    <div class="showTime">当前时间：{{ currentTime }}</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      timer: null, // 定时器名称
      year: "",
      month: "",
      date: "",
      hours: "",
      minutes: "",
      seconds: "",
    };
  },
  computed: {
    currentTime() {
      return (
        this.year +
        "年" +
        this.month +
        "月" +
        this.date +
        "-" +
        this.hours +
        "时" +
        this.minutes +
        "分" +
        this.seconds +
        "秒"
      );
    },
  },
  methods: {
    getCurrentTime() {
      this.year = new Date().getFullYear();
      this.month = new Date().getMonth() + 1;
      this.date = new Date().getDate();
      this.hours = new Date().getHours();
      this.minutes = new Date().getMinutes();
      this.seconds = new Date().getSeconds();
    },
  },
  mounted() {
    // 设置定时器，每1秒执行一次
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  },
  beforeDestroy() {
    // 销毁定时器
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 1.25rem;
  background: url(../assets/head_bg.png);
  background-size: 100% 100%;
  h1 {
    font-size: 0.475rem;
    color: #fff;
    line-height: 1rem;
    text-align: center;
  }
}
.showTime {
  position: absolute;
  right: 0.375rem;
  top: 0;
  line-height: 0.9375rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.25rem;
}
</style>