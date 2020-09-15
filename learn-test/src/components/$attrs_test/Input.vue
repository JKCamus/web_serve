<template>
    <div>
        <label>输入框</label>
        <el-input v-model="inputValue" v-bind="$attrs"></el-input>
    </div>
</template>
<script>
export default {
    name: "Input",
    data() {
        return {
            inputValue: "",
        };
    },
};
</script>