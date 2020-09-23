<!--
 * @Description: 
 * @version: 
 * @Author: camus
 * @Date: 2020-09-21 15:57:50
 * @LastEditors: camus
 * @LastEditTime: 2020-09-23 11:58:22
-->
<template>
  <div class="page2">
    <h1>page2</h1>
    <h2>hello i'Page2</h2>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
<style>
</style>