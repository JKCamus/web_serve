<template>
  <div class="count">
    <h1>hello Vue3!</h1>
    <h2>count: {{count}}</h2>
    <button @click="inc">click++</button>
    <hr />
    <h1>反转字符串输入</h1>value：
    <input type="text" v-model="value" />
    <br />
    revalue:{{revalue}}
  </div>
</template>
<script>
import { reactive, toRefs, computed } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
      value: "",
      revalue: computed(() => {
        return state.value.split("").reverse().join("");
      }),
    });
    const inc = (params) => {
      state.count++;
    };
    console.log("state", state);
    return {
      ...toRefs(state),
      inc,
    };
  },
};
</script>
<style>
</style>