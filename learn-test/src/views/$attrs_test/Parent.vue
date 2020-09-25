<template>
  <div>
    <!-- 注意这里可能会有很多的属性，为了能够透传，我们可以直接使用 v-bind="$attrs" -->
    <!-- 为了能让孙组件能够将事件 emit 出去，这里使用了v-on="$listeners" -->
    <!-- 注意这里可能会有很多的属性，为了能够透传，我们可以直接使用 v-bind="$attrs" -->
    <Input v-on="$listeners" placeholder="请输入穿透的placeHolder" :clearable="true" v-bind="$props" />

    <span>name: {{name}}</span>
    <hr />
    <span>age: {{age}}</span>
  </div>
</template>
<script>
import Input from "./Input";
export default {
  name: "Parent",
  components: {
    Input,
  },
  props: ["name", "age"],
};
</script>
