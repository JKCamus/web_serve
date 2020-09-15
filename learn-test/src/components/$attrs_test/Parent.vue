<template>
    <div>
        <Input placeholder="请输入穿透的placeHolder" :clearable="true" />
    </div>
</template>
<script>
import Input from "./Input";
export default {
    name: "Parent",
    components: {
        Input,
    },
};
</script>