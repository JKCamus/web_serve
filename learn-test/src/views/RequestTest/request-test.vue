<!--
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-02-05 11:00:02
 * @LastEditors: camus
 * @LastEditTime: 2021-02-20 14:03:18
-->
<template>
  <div class="request-test">===============</div>
</template>

<script>
import { getPhotoList } from "services/home";
export default {
  name: "request-test",
  data() {
    return {
      infoList: [],
    };
  },
  methods: {
    async fetchList() {
      const list = await getPhotoList(1, 20);
      this.infoList = list;
      this.concurrentFetch();
    },
    imgPromise(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = src;
      });
    },
    async concurrentFetch() {
      function widthAwait(promise) {
        return promise
          .then((data) => [null, data])
          .catch((err) => {
            return [err, undefined];
          });
      }
      try {
        const promiseArr = this.infoList.map((item) => widthAwait(this.imgPromise(item.url)));
        await Promise.all(promiseArr);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    // this.fetchList();
  },
};
</script>
<style lang='scss' scoped>
</style>
