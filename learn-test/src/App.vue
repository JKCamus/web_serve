<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <nav id="nav-1">
      <router-link class="link-1" to="/home">穿透</router-link>

      <router-link class="link-1" to="/dynamicComponent">动态组件</router-link>
      <router-link class="link-1" to="/WebGl">WebGl</router-link>
      <router-link class="link-1" to="/Lodash">Lodash</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Eye from "./components/learnEye";
import css from "./components/webGL/css";
export default {
  name: "App",
  components: {
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  @import url(https://fonts.googleapis.com/css?family=Raleway);
  body {
    margin: 0px;
  }
  nav {
    margin-top: 40px;
    padding: 24px;
    text-align: center;
    font-family: Raleway;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  }
  #nav-1 {
    background: #3fa46a;
  }

  .link-1 {
    transition: 0.3s ease;
    background: #3fa46a;
    color: #ffffff;
    font-size: 20px;
    text-decoration: none;
    border-top: 4px solid #3fa46a;
    border-bottom: 4px solid #3fa46a;
    padding: 20px 0;
    margin: 0 20px;
  }
  .link-1:hover {
    border-top: 4px solid #ffffff;
    border-bottom: 4px solid #ffffff;
    padding: 6px 0;
  }
}
</style>
