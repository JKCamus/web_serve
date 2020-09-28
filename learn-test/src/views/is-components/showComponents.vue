<template>
  <div class="showComponents">
    <div v-for="(config,index) in configJsonArr" :key="config.type+index">
      <CompFormItem :configJson="config"></CompFormItem>
    </div>
    <!-- <Input></Input>
    <Select></Select>-->
  </div>
</template>
<script>
import Input from "./input";
import Select from "./select";

const CompFormItem = {
  components: {
    Input,
    Select,
  },
  name: "FormItem",
  props: {
    configJson: {
      required: true,
    },
  },
  render(h) {
    return h(`${this.configJson.type}`, {
      props: {
        ...(this.configJson.props || {}),
      },
      attrs: {
        ...(this.configJson.props || {}),
      },
    });
  },
};
export default {
  name: "showComponents",
  components: {
    // Input,
    // Select,
    CompFormItem,
  },
  props: {
    configJsonArr: {
      type: Array,
      requierd: true,
      defaulte: () => [],
    },
  },
  data() {
    return {};
  },
};

</script>
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

