<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Parent :age="18" name="camus" @changeMydata="changeMydata" :myData="myData"></Parent>
    <label>动态组件属性透传</label>

    <showComponents :configJsonArr="configJsonArr"></showComponents>
    <!-- <Lodash></Lodash> -->
    <Eye></Eye>
    <hr />
    <webGL></webGL>
    <css></css>
  </div>
</template>

<script>
import Parent from "./components/$attrs_test/Parent";
import showComponents from "./components/is-components/showComponents";
import Lodash from "./components/learn_lodash/basic";
import Eye from "./components/learnEye";
import webGL from "./components/webGL";
import css from './components/webGL/css'
export default {
  name: "App",
  components: {
    Parent,
    showComponents,
    Lodash,
    Eye,
    webGL,
    css
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
