<template>
  <div class="webGL">
      <webGl></webGl>
      <process></process>
      <Button></Button>
  </div>
</template>
<script>
import { getNoticeList } from "services/home";
import process from './css'
import webGl from './webGl'
import Button from './button'
export default {
  name: "webGL",
  components:{
    webGl,
    process,
    Button
  },
  mounted() {
    getNoticeList().then((res) => console.log("res", res));
  },
};
</script>
<style>
</style>
