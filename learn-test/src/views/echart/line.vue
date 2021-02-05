<!--
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-02-03 11:08:33
 * @LastEditors: camus
 * @LastEditTime: 2021-02-05 10:53:20
-->
<template>
  <Chart id="line" :option="option" height="400px" />
</template>

<script>
import echarts from "echarts";
import Chart from "components/chart";

const colorList = ["#9E87FF", "#73DDFF", "#fe9a8b", "#F56948", "#9E87FF"];

export default {
  name: "LineChart",
  components: { Chart },
  data() {
    return {
      option: {
        backgroundColor: "#fff",

        tooltip: {
          trigger: "axis",
          axisPointer: {
            label: {
              show: false,
              backgroundColor: "#fff",
              color: "#556677",
              borderColor: "rgba(0,0,0,0)",
              shadowColor: "rgba(0,0,0,0)",
              shadowOffsetY: 0,
            },
            lineStyle: {
              width: 0,
            },
          },
          backgroundColor: "#fff",
          textStyle: {
            color: "#5c6c7c",
          },
          padding: [10, 10],
          extraCssText: "box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)",
        },
        grid: {
          left: "2.5%",
          right: "1%",
        },
        xAxis: [
          {
            type: "category",
            data: [],
            axisLine: {
              lineStyle: {
                color: "#DCE2E8",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              rotate: 40,
              textStyle: {
                color: "#556677",
              },
              // 默认x轴字体大小
              fontSize: 12,
              // margin:文字到x轴的距离
              margin: 15,
            },
            axisPointer: {
              label: {
                // padding: [11, 5, 7],
                padding: [0, 0, 10, 0],
                /*
除了padding[0]建议必须是0之外，其他三项可随意设置

和CSSpadding相同，[上，右，下，左]

如果需要下边线超出文字，设左右padding即可，注：左右padding最好相同

padding[2]的10:

10 = 文字距下边线的距离 + 下边线的宽度

如：UI图中文字距下边线距离为7 下边线宽度为2

则padding: [0, 0, 9, 0]

        */
                // 这里的margin和axisLabel的margin要一致!
                margin: 15,
                // 移入时的字体大小
                fontSize: 12,
                backgroundColor: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#fff", // 0% 处的颜色
                    },
                    {
                      // offset: 0.9,
                      offset: 0.86,
                      /*
0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）

            */
                      color: "#fff", // 0% 处的颜色
                    },
                    {
                      offset: 0.86,
                      color: "#33c0cd", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#33c0cd", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
            boundaryGap: false,
          },
        ],
        yAxis: [
          {
            type: "value",
            minInterval: 1,
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#DCE2E8",
              },
            },
            axisLabel: {
              textStyle: {
                color: "#556677",
              },
            },
            splitLine: {
              show: false,
            },
          },
          {
            type: "value",
            minInterval: 1,
            position: "right",
            axisTick: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#556677",
              },
              formatter: "{value}",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#DCE2E8",
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "",
            type: "line",
            data: [],
            symbolSize: 1,
            symbol: "circle",
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
              width: 5,
              color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
                {
                  offset: 0,
                  color: "#73DD39",
                },
                {
                  offset: 1,
                  color: "#73DDFF",
                },
              ]),
              shadowColor: "rgba(115,221,255, 0.3)",
              shadowBlur: 10,
              shadowOffsetY: 20,
            },
            itemStyle: {
              normal: {
                color: colorList[1],
                borderColor: colorList[1],
              },
            },
          },
        ],
      },
    };
  },
  props: {
    xAxis: {
      type: Array,
    },
    data: {
      type: Array,
    },
    isJump: {
      type: Boolean,
    },
    dateType: {
      type: String,
    },
    source: {
      type: String,
    },
  },
  watch: {
    data: {
      // handler: function (newData) {

      // },
    },
  },
  mounted() {
    this.option.xAxis[0].data = [
      "2020-12-26",
      "2020-12-27",
      "2020-12-28",
      "2020-12-29",
      "2020-12-30",
      "2020-12-31",
      "2021-01-01",
      "2021-01-02",
      "2021-01-03",
      "2021-01-04",
      "2021-01-05",
      "2021-01-06",
      "2021-01-07",
      "2021-01-08",
      "2021-01-09",
      "2021-01-10",
      "2021-01-11",
      "2021-01-12",
      "2021-01-13",
      "2021-01-14",
      "2021-01-15",
      "2021-01-16",
      "2021-01-17",
      "2021-01-18",
      "2021-01-19",
      "2021-01-20",
      "2021-01-21",
      "2021-01-22",
      "2021-01-23",
      "2021-01-24",
    ];
    this.option.series[0].data = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      97,
      69,
      0,
      0,
      0,
      11,
      0,
      0,
      0,
      0,
      0,
    ];
  },
};
</script>

<style lang='scss' scoped>
</style>
