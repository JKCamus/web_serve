<template>
    <div id="ChartCard">
        <el-card>
            <!-- <div slot="header" class="tabTitle">访客访问量次数分析</div> -->
            <div>
                <slot name="title" >
                    <span >访客访问量次数分析</span>
                </slot>
                <slot name="chart">
                </slot>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    name: "visitorNum",
    components: {},
};
</script>
<style lang="scss">
#ChartCard {
height: 376px;
    .tabTitle {
        font-size: 16px;
        font-weight: bold;
        padding: 10px;
    }
    .chartStyle{
      margin-top: -20px;
    }

}
</style>
