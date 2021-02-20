<!--
 * @Description:
 * @version:代理设计模式
 * @Author: camus
 * @Date: 2021-02-20 14:22:31
 * @LastEditors: camus
 * @LastEditTime: 2021-02-20 15:53:27
-->
<template>
  <div class="proxy" ref="container"></div>
</template>
<script>
export default {
  name: "proxy",
  methods: {
    imagDom() {
      const imgEle = document.createElement("img");
      const element = this.$refs["container"];
      element.appendChild(imgEle);
      return {
        setSrc: function (src) {
          imgEle.src = src;
        },
      };
    },
    proxyImage() {
      const img = new Image();
      const { setSrc } = this.imagDom();
      img.onload = function () {
        setTimeout(() => {
          setSrc(this.src); // 图片加载完设置真实图片src
        }, 1000);
      };
      return {
        setSrc: function (src) {
          setSrc(require("./logo.png")); // 预先设置图片src为loading图
          img.src = src;
        },
      };
    },
  },
  mounted() {
    this.proxyImage().setSrc(require("./1.png"));
  },
};
</script>
<style lang='scss' scoped>
</style>
