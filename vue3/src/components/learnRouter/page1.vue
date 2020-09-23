
<template>
  <div class="page1">
      <h1>page1</h1>
      <h2>hello i'm Page1</h2>
      <h3>****</h3>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import {useStore} from 'vuex'

export default {
  setup() {
    const store=useStore()
    const {state:$state}=store
    const state = reactive({
      count: 0,
    });
    console.log('store', $state.count)
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style>
</style>