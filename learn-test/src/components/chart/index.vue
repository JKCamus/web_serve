<template>
  <div :style="{height}">
    <div :id="id" :style="{height: 'inherit'}" v-if="!nullData"/>
  </div>
</template>

<script>
import echarts from 'echarts';
import elementResizeDetectorMaker from 'element-resize-detector';
import debounce from '@/utils/debounce'

const erd = elementResizeDetectorMaker();
export default {
  name: "Chart",
  props: {
    id: {
      required: true,
      type: String
    },
    option: {
      required: true,
    },
    height: {
      default: '450px',
      type: String
    },
    loadingText: {
      default: '加载中...'
    },
    nullData: {
      default: false
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
      if (this.resizeArray) {
        this.resizeArray.forEach(chart => {
          chart.resize();
        });
      }
    }
  },
  mounted() {
    if (this.initChart()) {
      window.addEventListener('resize', this.resizeCallback);
      erd.listenTo(document.getElementById(this.id).parentNode, debounce(()=>{
        this.resizeCallback();
      },1000))
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeCallback);
    if (this.resizeArray) {
      this.resizeArray.forEach(chart => chart.dispose());
    }
    this.resizeArray = null;
  },
  watch: {
    option: {
      deep: true,
      immediate: true,
      handler(newOption) {
        this.$nextTick(() => {
          if (!this.nullData) {
            if (newOption) {
              this.initChart().hideLoading();
              this.initChart().setOption(newOption, true);
            } else {
              this.initChart().showLoading({
                text: this.loadingText,
                color: '#1677FF',
                textColor: '#000',
                maskColor: 'rgba(255, 255, 255, 0.8)',
                zlevel: 0,
                // 字体大小。从 `v4.8.0` 开始支持。
                fontSize: 12,
                // 是否显示旋转动画（spinner）。从 `v4.8.0` 开始支持。
                showSpinner: true,
                // 旋转动画（spinner）的半径。从 `v4.8.0` 开始支持。
                spinnerRadius: 10,
                // 旋转动画（spinner）的线宽。从 `v4.8.0` 开始支持。
                lineWidth: 5
              });
            }
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.result {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
