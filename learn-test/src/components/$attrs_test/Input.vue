<template>
  <div class="inputStyle">
    <label>输入框</label>
    <el-input v-model="inputValue" v-bind="$attrs" @input="sonIpnut"></el-input>
    {{inputValue}}
    <hr>
    <span>$props: {{$props}}</span>
    <hr />
    <span>$attrs: {{$attrs}}</span>
  </div>
</template>
<script>
export default {
  name: "Input",
  // props: ["name"],
  prpos: {
    myData: { String },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  created() {
    // this.inputValue = this.myData;
    console.log("App上的myData", this.myData);
  },
  mounted() {
    // console.log('------', this.myData)
  },
  methods: {
    sonIpnut() {
      this.$emit("changeMydata", this.inputValue);
    },
  },
};
</script>
<style lang="scss">
.inputStyle {
  margin-bottom: 20px;
}
</style>
