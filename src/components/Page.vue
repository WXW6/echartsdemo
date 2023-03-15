<template>
  <div class="page">
    <Header></Header>
    <Mainbox></Mainbox>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Mainbox from "@/components/Mainbox";
export default {
  name: "Page",
  components: {
    Header,
    Mainbox,
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  background: url(../assets/bg.jpg);
  // 解决刷新时底部偶尔出现白色区域的问题
  overflow: hidden;
  background-size: 100% 100%;
}
</style>