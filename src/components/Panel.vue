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
  data() {
    return {
      chartsTitle: "", //每个图表正上方的标题
      option1: {
        color: ["#2f89cf", "pink", "pink", "pink", "pink", "red", "red"], //设置图表的颜色。注意后面是个数组
        tooltip: {
          //图表的提示框组件
          trigger: "axis", //坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        // 网格配置  grid可以控制线形图 柱状图 图表大小
        grid: {
          left: "0%",
          top: 10,
          right: "0%",
          bottom: "4%",
          // grid 区域是否包含坐标轴的刻度标签
          containLabel: true,
        },
        // 设置x轴的相关配置
        xAxis: [
          {
            type: "category",
            data: [
              "旅游行业",
              "教育培训",
              "游戏行业",
              "医疗行业",
              "电商行业",
              "社交行业",
              "金融行业",
            ],
            // 坐标轴刻度相关设置
            axisTick: {
              alignWithLabel: true, //可以保证刻度线和标签对齐
            },
            // 坐标轴刻度标签的相关设置
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 7.8,
              interval: 0,
            },
            // 坐标轴轴线相关设置
            axisLine: {
              show: false,
            },
          },
        ],
        // 设置y轴的相关配置
        yAxis: [
          {
            type: "value",
            // 坐标轴刻度标签的相关设置
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12px",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.1)",
                // width: 1,默认为1
                // type: "solid",默认为"solid"
              },
            },
            // 坐标轴在 grid 区域中的分隔线。
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
        ],
        // 系列图表配置 它决定着显示那种类型的图表
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "35%", //柱条的宽度，不设时自适应。
            data: [200, 300, 300, 900, 1500, 1200, 600],
            //图形样式。
            itemStyle: {
              borderRadius: 3,
            },
          },
        ],
      },
      option2: {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
          trigger: "axis",
        },
        legend: {
          itemHeight: 10,
          itemWidth: 10,
          right: "10%",
          textStyle: {
            color: "#4c9bfd", // 图例文字颜色
            fontSize: 9,
          },
        },
        grid: {
          top: "20%",
          left: "0%",
          right: "3%",
          bottom: "3%",
          // 是否显示直角坐标系网格。
          show: true,
          // 网格的边框颜色。
          borderColor: "#012f4a",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          axisTick: {
            show: false, // 去除刻度线
          },
          axisLabel: {
            color: "#4c9bfd", // 文本颜色
            fontSize: 10,
            interval: 0,
          },
          axisLine: {
            show: false, // 去除轴线
          },
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false, // 去除刻度线
          },
          axisLabel: {
            color: "#4c9bfd", // 文本颜色
          },
          axisLine: {
            show: false, // 去除轴线
          },
          splitLine: {
            lineStyle: {
              color: "#012f4a", // 分割线颜色
            },
          },
        },
        series: [
          {
            name: "新增粉丝",
            type: "line",
            // 折线修饰为圆滑
            smooth: true,
            symbolSize: 1,
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          },
          {
            name: "新增游客",
            type: "line",
            smooth: true,
            symbolSize: 1,
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
          },
        ],
      },
      option3: {
        tooltip: {
          trigger: "item",
        },
        legend: {
          bottom: "0%",
          // 图例每项之间的间隔。
          itemGap: 5,
          itemHeight: 8,
          itemWidth: 8,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: 10,
          },
        },
        series: [
          {
            name: "年龄分布",
            type: "pie",
            // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
            center: ["50%", "50%"],
            // 饼图的半径。
            radius: ["40%", "60%"],
            // 是否启用防止标签重叠策略，默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠。
            avoidLabelOverlap: false,
            // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
            label: {
              show: false,
            },
            // 标签的视觉引导线配置。
            labelLine: {
              show: false,
            },
            data: [
              { value: 10, name: "0岁以下" },
              { value: 40, name: "20-29岁" },
              { value: 20, name: "30-39岁" },
              { value: 20, name: "40-49岁" },
              { value: 10, name: "50岁以上" },
            ],
            color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
          },
        ],
      },
      option4: {
        grid: {
          top: "4%",
          left: "22%",
          bottom: "4%",
        },
        xAxis: {
          show: false,
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "#fff",
              fontSize: 10,
            },
          },
          {
            data: [702, 350, 610, 793, 664],
            inverse: true,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "#fff",
              fontSize: 10,
            },
          },
        ],
        series: [
          {
            name: "条",
            type: "bar",
            // 柱条的宽度，不设时自适应。
            barWidth: 5,
            data: [70, 34, 60, 78, 69],
            // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            yAxisIndex: 0,
            itemStyle: {
              borderRadius: 20,
              color: function (params) {
                let colorList = [
                  "#1089E7",
                  "#F57474",
                  "#56D0E3",
                  "#F8B448",
                  "#8B78F6",
                ];
                return colorList[params.dataIndex];
              },
            },
            // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
            label: {
              show: true,
              formatter: "{c}%",
              color: "#fff",
              fontSize: 10,
            },
          },
          {
            name: "框",
            type: "bar",
            barWidth: 10,
            data: [100, 100, 100, 100, 100],
            yAxisIndex: 1,
            itemStyle: {
              color: "none",
              borderColor: "#00c1de",
              borderWidth: 2,
              barBorderRadius: 15,
            },
          },
        ],
      },
      option5: {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          itemHeight: 11,
          itemWidth: 11,
          right: "10%",
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: 10,
          },
        },
        grid: {
          left: 0,
          top: 30,
          right: 0,
          bottom: 10,
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 10,
              },
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)",
              },
            },
            data: [
              "01",
              "02",
              "03",
              "04",
              "05",
              "06",
              "07",
              "08",
              "09",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 10,
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
        ],
        series: [
          {
            name: "播放量",
            type: "line",
            smooth: true,
            // 单独修改线的样式
            lineStyle: {
              color: "#0184d5",
            },
            // symbol设置拐点
            symbol: "circle",
            // symbolSize拐点大小
            symbolSize: 8,
            // 区域填充样式。
            // 设置拐点颜色以及边框
            itemStyle: {
              color: "#0184d5",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12,
            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            areaStyle: {
              // 渐变色，只需要复制即可
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.4)", // 渐变色的起始颜色
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.1)", // 渐变线的结束颜色
                  },
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
            },
            emphasis: {
              focus: "series",
            },
            data: [
              30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40,
              30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40,
            ],
          },
          {
            name: "转发量",
            type: "line",
            smooth: true,
            lineStyle: {
              color: "#00d887",
            },
            // 设置拐点 小圆点
            symbol: "circle",
            // 拐点大小
            symbolSize: 5,
            // 设置拐点颜色以及边框
            itemStyle: {
              color: "#00d887",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12,
            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.4)",
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.1)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
            },
            emphasis: {
              focus: "series",
            },
            data: [
              130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40,
              130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20,
            ],
          },
        ],
      },
      option6: {
        legend: {
          bottom: "0%",
          // 图例每项之间的间隔。
          itemGap: 5,
          itemHeight: 8,
          itemWidth: 8,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: 10,
          },
        },
        series: [
          {
            name: "地区分布",
            type: "pie",
            center: ["50%", "46%"],
            radius: ["10%", "70%"],
            // 是否展示成南丁格尔图，通过半径区分数据大小。
            roseType: "radius",
            // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
            label: {
              fontSize: 10,
            },
            // 标签的视觉引导线配置。
            labelLine: {
              // 视觉引导线第一段的长度。
              length: 3,
              // 视觉引导项第二段的长度。
              length2: 4,
            },
            data: [
              {
                value: 20,
                name: "云南",
                label: {
                  color: "#006cff",
                },
              },
              {
                value: 26,
                name: "北京",
                label: {
                  color: "#60cda0",
                },
              },
              {
                value: 24,
                name: "山东",
                label: {
                  color: "#ed8884",
                },
              },
              {
                value: 25,
                name: "河北",
                label: {
                  color: "#ff9f7f",
                },
              },
              {
                value: 20,
                name: "江苏",
                label: {
                  color: "#0096ff",
                },
              },
              {
                value: 25,
                name: "浙江",
                label: {
                  color: "#9fe6b8",
                },
              },
              {
                value: 30,
                name: "四川",
                label: {
                  color: "#32c5e9",
                },
              },
              {
                value: 42,
                name: "湖北",
                label: {
                  color: "#1d9dff",
                },
              },
            ],
            color: [
              "#006cff",
              "#60cda0",
              "#ed8884",
              "#ff9f7f",
              "#0096ff",
              "#9fe6b8",
              "#32c5e9",
              "#1d9dff",
            ],
          },
        ],
      },
    };
  },
  props: { chart: String },
  methods: {
    getEchartsData() {
      const charts = this.$echarts.init(this.$refs.charts);
      // const resizeDiv = this.$refs.panels;
      switch (this.chart) {
        case "chart1":
          this.chartsTitle = "柱形图-就业行业";
          charts.setOption(this.option1);
          break;
        case "chart2":
          this.chartsTitle = "折线图-人员变化";
          charts.setOption(this.option2);
          break;
        case "chart3":
          this.chartsTitle = "饼形图-年龄分布";
          charts.setOption(this.option3);
          break;
        case "chart4":
          this.chartsTitle = "柱状图-技能掌握";
          charts.setOption(this.option4);
          break;
        case "chart5":
          this.chartsTitle = "折线图-播放量";
          charts.setOption(this.option5);
          break;
        case "chart6":
          this.chartsTitle = "饼形图-地区分布";
          charts.setOption(this.option6);
          break;
      }
      // 让图表跟随屏幕自适应
      // 第一种
      // window.onresize = function () {
      //   charts.resize();
      //   // location.reload();
      // };
      // 第二种;
      let sizeFun = function () {
        charts.resize();
      };
      window.addEventListener("resize", sizeFun);
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