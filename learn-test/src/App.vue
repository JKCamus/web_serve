<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <router-link to="/showComponents">动态组件</router-link>
    <router-link to="/WebGl">WebGl</router-link>
    <router-link to="/Lodash">Lodash</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import showComponents from "./components/is-components/showComponents";
import Eye from "./components/learnEye";
import css from "./components/webGL/css";
export default {
  name: "App",
  components: {
    showComponents,
    Eye,
    css,
  },
  data() {
    return {
      configJsonArr: [
        {
          type: "Input",
          props: {
            placeholder: "我是默认值",
            clearable: true,
          },
        },
        {
          type: "Select",
          props: {
            placeholder: "我是默认值",
          },
        },
        {
          type: "Input",
          props: {
            placeholder: "我是默认值",
            suffixIcon: "el-icon-delete",
          },
        },
      ],
      myData: "",
    };
  },
  methods: {
    changeMydata(val) {
      console.log("app中val", val);
    },
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
