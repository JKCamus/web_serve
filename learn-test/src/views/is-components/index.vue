<template>
  <div class="dynamicComponent">
    <showComponents
      :configJsonArr="configJsonArr"
      :myData="myData"
    ></showComponents>
    <dynamicModel></dynamicModel>
  </div>
</template>
<script>
import showComponents from "./showComponents";
import dynamicModel from './dynamicModel'
export default {
  name: "dynamicComponent",
  components: {
    showComponents,
    dynamicModel
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
</style>
