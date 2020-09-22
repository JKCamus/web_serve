<template>
  <div class="webGL">
    <h1>hello webGL</h1>
    <canvas id="webgl" width="500" height="500" style="border:1px solid"> </canvas>
  </div>
</template>
<script>
export default {
  name: "webGL",
  mounted() {
    const canvas=document.getElementById('webgl')
    const gl=canvas.getContext('webgl')
          const vertexShaderSource = `
        // 声明一个属性变量 a
        attribute vec3 a;
        void main() {
          // 顶点在作色器处理后的位置信息
          gl_Position = vec4(a, 1.0);
        }
      `;

      const fragmentShaderSource = `
        void main() {
          // 片段颜色
          gl_FragColor = vec4(0.1, 0.7, 0.3, 1.0);
        }
      `;

      // 初始化着色器方法
      function initShader(gl, vertexSource, fragmentSource) {
        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        // 将着色器源码附加到着色器上
        gl.shaderSource(vertexShader, vertexSource);
        gl.shaderSource(fragmentShader, fragmentSource);

        // 编译着色器
        gl.compileShader(vertexShader);
        gl.compileShader(fragmentShader);

        // 创建一个程序对象
        const program = gl.createProgram();
        // 将编译好的着色器附加到程序对象上
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        // 链接程序对象
        gl.linkProgram(program);
        // WebGL引擎使用该程序对象
        gl.useProgram(program);

        return program;
      }

      function sendDataToSharder(gl, data) {
        // 将顶点数据写入缓存区，并将数据传递给顶点着色器
        var vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
        var vertexAttribLocation = gl.getAttribLocation(program, "a");
        gl.vertexAttribPointer(vertexAttribLocation, 3, gl.FLOAT, false, 0, 0);
        // 设置通过顶点着色器将缓冲的输入数据转换为一系列顶点数组
        gl.enableVertexAttribArray(vertexAttribLocation);
      }

      const program = initShader(gl, vertexShaderSource, fragmentShaderSource);

      // 定义顶点数据，这里定义了三角形的三个顶点坐标，以中心点为坐标原点，z 轴为 0
      var data = [0.0, 0.5, 0.0, -0.5, -0.5, 0.0, 0.5, -0.5, 0.0];
      sendDataToSharder(gl, data);

      // 绘制缓冲数组
      gl.drawArrays(gl.TRIANGLES, 0, 3);
  },

};
</script>
<style>
</style>
