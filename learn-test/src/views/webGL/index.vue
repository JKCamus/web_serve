<template>
  <div class="webGL">
      <webGl></webGl>
      <process></process>
  </div>
</template>
<script>
import { getNoticeList } from "services/home";
import process from './css'
import webGl from './webGl'
export default {
  name: "webGL",
  components:{
    webGl,
    process
  },
  mounted() {
    getNoticeList().then((res) => console.log("res", res));
  },
};
</script>
<style>
</style>
