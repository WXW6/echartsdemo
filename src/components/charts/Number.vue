<template>
  <div class="number">
    <div class="number-header">
      <ul>
        <li>125811</li>
        <li>104563</li>
      </ul>
    </div>
    <div class="number-footer">
      <ul>
        <li>前端需求人数</li>
        <li>市场供应人数</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Number",
};
</script>

<style lang="scss" scoped>
@import "../../assets/font/font.css";
.number {
  background-color: rgba(101, 132, 226, 0.1);
  padding: 0.1875rem;
  .number-header {
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
    ul {
      display: flex;
      li {
        position: relative;
        flex: 1;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.875rem;
        color: #ffeb7b;
        text-align: center;
        font-family: "electronicFont";
        &:first-child:after {
          position: absolute;
          top: 25%;
          right: 0;
          content: "";
          width: 1px;
          height: 50%;
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
    &::before {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      width: 30px;
      height: 10px;
      border-left: 2px solid #02a6b5;
      border-top: 2px solid #02a6b5;
    }
    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      content: "";
      width: 30px;
      height: 10px;
      border-right: 2px solid #02a6b5;
      border-bottom: 2px solid #02a6b5;
    }
  }
  .number-footer {
    ul {
      display: flex;
      li {
        flex: 1;
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.225rem;
        height: 0.5rem;
        line-height: 0.5rem;
        padding-top: 0.125rem;
      }
    }
  }
}
</style>