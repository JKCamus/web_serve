<!--
 * @Description:
 * @Version: 0.1
 * @Autor: chenyt
 * @Date: 2020-03-21 22:55:00
 * @LastEditors: camus
 * @LastEditTime: 2020-09-27 10:32:04
 -->

<template>
  <div class="page">
    <div class="form-box">
      <y-form :data="jsonData" :remote="remoteFuncs" :value="editData" ref="yForm" ></y-form>
      <div class="btn-box flex-c-c">
        <el-button type="primary" @click="handleSubmit">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
const testData = require("./testData.json")
export default {
  name: "page",
  data(){
    return {
      jsonData: {"list": [{"type": "title", "name": "标题", "icon": "icon-input", "options": {"width": "100%", "defaultValue": "", "required": false, "title": "测试", "remoteFunc": "func_1597297778000_16024"}, "model": "title", "key": "1597297778000_16024", "rules": []}, {"type": "password", "name": "密码", "icon": "el-icon-view", "options": {"width": "100%", "hidden": false, "patternErrorMsg": "", "defaultValue": "", "changeEvent": "", "required": false, "dataType": "", "trigger": "blur", "pattern": "", "placeholder": "请输入密码", "disabled": false, "remoteFunc": "func_1597297781000_17621"}, "model": "password_1597297781000_17621", "key": "1597297781000_17621", "rules": []}, {"type": "input", "icon": "icon-input", "options": {"hidden": false, "width": "100%", "defaultValue": "", "required": false, "changeEvent": "", "dataType": "", "pattern": "", "readonly": false, "placeholder": "请输入", "trigger": "blur", "disabled": false, "clearable": true, "remoteFunc": "func_1597297791000_92643"}, "name": "单行文本", "key": "1597297791000_92643", "model": "input_1597297791000_92643", "rules": []}, {"type": "textarea", "icon": "icon-diy-com-textarea", "options": {"hidden": false, "width": "100%", "rows": 5, "resize": "vertical", "readonly": false, "patternErrorMsg": "", "changeEvent": "", "defaultValue": "", "required": false, "disabled": false, "pattern": "", "placeholder": "请输入", "remoteFunc": "func_1597297793000_67528"}, "name": "多行文本", "key": "1597297793000_67528", "model": "textarea_1597297793000_67528", "rules": []}, {"type": "number", "icon": "icon-number", "options": {"hidden": false, "width": "", "required": false, "defaultValue": 0, "changeEvent": "", "min": 0, "max": 0, "step": 1, "disabled": false, "controlsPosition": "", "remoteFunc": "func_1597297794000_70561"}, "name": "计数器", "key": "1597297794000_70561", "model": "number_1597297794000_70561", "rules": []}, {"type": "radio", "icon": "icon-radio-active", "options": {"hidden": false, "inline": true, "changeEvent": "", "defaultValue": "", "showLabel": false, "patternErrorMsg": "", "options": [{"value": "Option 1", "label": "Option 1"}, {"value": "Option 2", "label": "Option 2"}, {"value": "Option 3", "label": "Option 3"}], "required": false, "width": "", "remote": false, "remoteOptions": [], "props": {"value": "value", "label": "label"}, "remoteFunc": "func_1597297795000_65051", "disabled": false}, "name": "单选框组", "key": "1597297795000_65051", "model": "radio_1597297795000_65051", "rules": []}, {"type": "checkbox", "icon": "icon-check-box", "options": {"hidden": false, "inline": true, "defaultValue": [], "changeEvent": "", "showLabel": false, "patternErrorMsg": "", "options": [{"value": "Option 1"}, {"value": "Option 2"}, {"value": "Option 3"}], "required": false, "width": "", "remote": false, "remoteOptions": [], "props": {"value": "value", "label": "label"}, "remoteFunc": "func_1597297795000_57335", "disabled": false}, "name": "多选框组", "key": "1597297795000_57335", "model": "checkbox_1597297795000_57335", "rules": []}, {"type": "time", "icon": "icon-time", "options": {"hidden": false, "defaultValue": "", "readonly": false, "disabled": false, "editable": true, "clearable": true, "placeholder": "请选择", "startPlaceholder": "请选择", "endPlaceholder": "请选择", "isRange": false, "arrowControl": true, "format": "HH:mm:ss", "required": false, "changeEvent": "", "width": "100%", "remoteFunc": "func_1597297796000_7608"}, "name": "时间选择器", "key": "1597297796000_7608", "model": "time_1597297796000_7608", "rules": []}, {"type": "date", "icon": "icon-date", "options": {"hidden": false, "changeEvent": "", "defaultValue": "", "readonly": false, "disabled": false, "editable": true, "clearable": true, "placeholder": "请选择", "startPlaceholder": "请选择", "endPlaceholder": "请选择", "type": "date", "format": "yyyy-MM-dd", "timestamp": false, "required": false, "width": "100%", "remoteFunc": "func_1597297796000_75678"}, "name": "日期选择器", "key": "1597297796000_75678", "model": "date_1597297796000_75678", "rules": []}, {"type": "rate", "icon": "icon-pingfen1", "options": {"hidden": false, "changeEvent": "", "defaultValue": 0, "max": 5, "disabled": false, "allowHalf": false, "required": false, "remoteFunc": "func_1597297797000_84830"}, "name": "评分", "key": "1597297797000_84830", "model": "rate_1597297797000_84830", "rules": []}, {"type": "color", "icon": "icon-color", "options": {"hidden": false, "defaultValue": "", "disabled": false, "changeEvent": "", "showAlpha": false, "required": false, "remoteFunc": "func_1597297797000_41805"}, "name": "颜色选择器", "key": "1597297797000_41805", "model": "color_1597297797000_41805", "rules": []}, {"type": "select", "icon": "icon-select", "options": {"defaultValue": "", "changeEvent": "", "multiple": false, "disabled": false, "clearable": true, "placeholder": "请选择", "trigger": "change", "required": false, "showLabel": false, "width": "100%", "hidden": false, "options": [{"value": "Option 1"}, {"value": "Option 2"}, {"value": "Option 3"}], "remote": false, "filterable": false, "remoteOptions": [], "props": {"value": "value", "label": "label"}, "remoteFunc": "func_1597297798000_38593"}, "name": "下拉选择框", "key": "1597297798000_38593", "model": "select_1597297798000_38593", "rules": []}, {"type": "switch", "icon": "icon-switch", "options": {"hidden": false, "changeEvent": "", "defaultValue": false, "required": false, "disabled": false, "remoteFunc": "func_1597297798000_12594"}, "name": "开关", "key": "1597297798000_12594", "model": "switch_1597297798000_12594", "rules": []}, {"type": "slider", "icon": "icon-slider", "options": {"hidden": false, "defaultValue": 0, "disabled": false, "required": false, "changeEvent": "", "min": 0, "max": 100, "step": 1, "showInput": false, "range": false, "width": "", "remoteFunc": "func_1597297799000_88416"}, "name": "滑块", "key": "1597297799000_88416", "model": "slider_1597297799000_88416", "rules": []}, {"type": "text", "icon": "icon-wenzishezhi-", "options": {"hidden": false, "defaultValue": "This is a text", "customClass": "", "html": false, "remoteFunc": "func_1597297799000_62562"}, "name": "文字", "key": "1597297799000_62562", "model": "text_1597297799000_62562", "rules": []}, {"type": "imgupload", "icon": "icon-tupian", "options": {"defaultValue": [], "size": {"width": 100, "height": 100}, "width": "", "tokenFunc": "funcGetToken", "token": "", "domain": "http://pfp81ptt6.bkt.clouddn.com/", "disabled": false, "length": 8, "multiple": false, "isQiniu": false, "isDelete": false, "min": 0, "isEdit": false, "action": "https://jsonplaceholder.typicode.com/photos/", "remoteFunc": "func_1597297800000_64670"}, "name": "图片", "key": "1597297800000_64670", "model": "imgupload_1597297800000_64670", "rules": []}, {"type": "editor", "icon": "icon-fuwenbenkuang", "options": {"defaultValue": "", "width": "", "remoteFunc": "func_1597297800000_54663"}, "name": "编辑器", "key": "1597297800000_54663", "model": "editor_1597297800000_54663", "rules": []}, {"type": "cascader", "icon": "icon-jilianxuanze", "options": {"defaultValue": [], "width": "100%", "placeholder": "请选择", "disabled": false, "clearable": true, "remote": true, "remoteOptions": [], "configs": {"multiple": false, "expandTrigger": "click"}, "props": {"value": "value", "label": "text", "children": "children"}, "remoteFunc": "func_1597297801000_18907"}, "name": "级联选择器", "key": "1597297801000_18907", "model": "cascader_1597297801000_18907", "rules": []}], "config": {"labelWidth": 100, "labelPosition": "right", "size": "small"}},
      editData: {},
      remoteFuncs: {

        func_1597297801000_18907(resolve) {
          // 级联选择器 cascader_1597297801000_18907
          // Call callback function once get the data from remote server
          // resolve(data)
          const data = testData
          resolve(data)

        },

        funcGetToken(resolve) {
          // 图片 imgupload_1597297800000_64670
          // Call callback function once get the token
          // resolve(token)
        }

      }
    }
  },
  computed: {
  },
  mounted() {
  },
  created(){
  },
  methods: {
    handleSubmit() {
      this.$refs.yForm.getData().then(data => {
        alert(JSON.stringify(data))
        // data check success
      }).catch(e => {
        // data check failed
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.page{
  padding: 10px;
  .form-box{
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 0 10px;
  }
  .btn-box{
    width: 100%;
    padding: 10px;
  }
}
</style>

