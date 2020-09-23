<template>
    <div>
        <div :id="id" :style="{height}" v-show="option" />
        <!-- <a-skeleton active v-show="!option"/> -->
    </div>
</template>

<script>
import echarts from "echarts";
import { debounce } from "./debounce.js";
import elementResizeDetectorMaker from "element-resize-detector";



const erd = elementResizeDetectorMaker();
export default {
    name: "Chart",

    props: {
        id: {
            required: true,
            type: String,
        },
        option: {
            required: true,
        },
        height: {
            default: "450px",
            type: String,
        },
        geoCoordMap:{
          type:Object
        },
        propsData:{
          type:Array
        }

    },
    data() {
        return {
            resizeArray: [],
        };
    },
    methods: {
        initChart() {
            if (document.getElementById(this.id)) {
                const chart = echarts.init(document.getElementById(this.id));
                this.resizeArray.push(chart);
                return chart;
            }
        },
        resizeCallback() {
            this.resizeArray.forEach((chart) => {
                chart.resize();
            });
        },

    },
    mounted() {
        if (this.initChart()) {
            window.addEventListener("resize", this.resizeCallback);
            erd.listenTo(
                document.getElementById(this.id).parentNode,
                debounce(() => {
                    this.resizeCallback();
                }, 500)
            );
        }
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.resizeCallback);
    },
    watch: {
        option: {
            deep: true,
            immediate: true,
            handler(newOption) {
                this.$nextTick(() => {
                    if (newOption) {
                        this.initChart().setOption(newOption);
                    }
                });
            },
        },
    },
};
</script>

<style scoped>
</style>
