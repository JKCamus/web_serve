<template>
  <div class="eye">
    <span>新密码:</span>
    <el-input v-model="passValue" placeholder="请输入密码" :type="pwdType">
      <img :src="seen?openEye:closeEye" alt @click="changeType" slot="suffix" />
    </el-input>
  </div>
</template>
<script>
export default {
  name: "eye",
  data() {
    return {
      passValue: "",
      openEye: require("@/assets/eye/openEye.svg"),
      closeEye: require("@/assets/eye/closeEye.svg"),
      pwdType: "password",
      seen: false,
    };
  },
  methods: {
    changeType() {
      this.pwdType = this.pwdType === "password" ? "text" : "password";
      this.seen = !this.seen;
    },
  },
};
</script>
<style lang='scss' scoped>
.eye {
  /deep/ .el-input__suffix {
    top: 10px;
  }
}
</style>
