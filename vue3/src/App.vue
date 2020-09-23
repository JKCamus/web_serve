<!--
 * @Description: 
 * @version: 
 * @Author: camus
 * @Date: 2020-08-16 23:06:18
 * @LastEditors: camus
 * @LastEditTime: 2020-09-23 13:52:55
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Chart id="category" :option="option"></Chart> -->
    <!-- <Parent></Parent> -->
    <count></count>
    <hr />
    <router-link to="/">Home</router-link>
    <router-link to="/page1">Page1/</router-link>
    <router-link to="/page2">Page2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Chart from "./components/Chart";
import count from "./components/count/count";

export default {
  name: "App",
  components: {
    // HelloWorld
    Chart,
    count,
  },
  data() {
    return {
      option: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
          },
        ],
      },
      category: "category",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
