<!--
 * @Description: 
 * @version: 
 * @Author: camus
 * @Date: 2020-09-21 15:56:06
 * @LastEditors: camus
 * @LastEditTime: 2020-09-23 14:21:05
-->
<template>
  <div class="page1">
      <h1>page1</h1>
      <h2>hello i'm Page1</h2>
      <h3>****</h3>
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