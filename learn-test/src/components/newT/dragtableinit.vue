<template>
  <div class="app-container">
    <el-form
      ref="formSearch"
      :model="formSearch"
      :inline="true"
      size="small"
      class="search-form clearfix"
    >
      <el-form-item class="search-field fl" label="栏目:" prop="roleName">
        <el-input
          v-model="formSearch.roleName"
          placeholder="请输入栏目"
          clearable
        />
      </el-form-item>
      <el-form-item class="fr">
        <el-button
          class="two-words"
          plain
          size="small"
          @click="onReset('formSearch')"
          >重置</el-button
        >
        <el-button
          class="two-words"
          type="primary"
          size="small"
          @click="fetchData(1)"
          >查询</el-button
        >
      </el-form-item>
    </el-form>
    <div class="table-wrap">
      <div class="table-edit-box clearfix">
        <div class="table-btn-right">
          <el-button type="success" size="small" @click="onAdd">添加</el-button>
        </div>
      </div>
      <el-table
        ref="versionTableRef"
        v-loading="listLoading"
        height="460px"
        :data="formData"
        element-loading-text="加载中..."
        border
        fit
        highlight-current-row
      >
        <el-table-column label="序号" width="50" align="center">
          <template slot-scope="scope">
            {{
              scope.$index + 1 + (formSearch.pageNum - 1) * formSearch.pageSize
            }}
          </template>
        </el-table-column>
        <el-table-column label="姓名" prop="name" show-overflow-tooltip />
        <el-table-column label="身份证号" prop="id" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="年龄" prop="age" show-overflow-tooltip />
        <el-table-column
          label="电子凭证"
          prop="certificate"
          show-overflow-tooltip
        />
        <el-table-column
          label="注册账号"
          prop="account"
          show-overflow-tooltip
        />
        <el-table-column
          align="center"
          prop="created_at"
          fixed="right"
          label="操作"
          width="250"
        >
          <template slot-scope="scope">
            <el-link type="primary" size="small" @click="handleClick(scope.row)"
              >修改</el-link
            >
            <el-link size="small" @click="handleMenuList(scope.row)"
              >权限</el-link
            >
            <el-link type="danger" size="small" @click="handleDelete(scope.row)"
              >删除</el-link
            >
          </template>
        </el-table-column>
      </el-table>
      <y-pagination
        v-show="total > 0"
        class="pageBox"
        :total="total"
        :page.sync="formSearch.pageNum"
        :limit.sync="formSearch.pageSize"
      />
    </div>
  </div>
</template>
<script>
import { operatingApi } from "@/api"
const { getVersion } = operatingApi

import Sortable from "sortablejs"

export default {
  name: "version",
  data() {
    return {
      formSearch: {
        roleName: "",
        pageNum: 1,
        pageSize: 10
      },
      listLoading: false,
      formData: [
        {
          id: 350888,
          name: "fix",
          age: 68,
          gender: "female",
          certificate: "",
          account: ""
        }
      ],
      formAdd: {
        id: "",
        name: "",
        age: "",
        gender: "",
        certificate: "",
        account: ""
      },
      formAddRule: {
        id: [{ required: true, message: "请输入角色名称", trigger: "blur" }],
        name: [{ required: true, message: "请输入排序号", trigger: "blur" }],
        age: [{ required: true, message: "请选择状态", trigger: "blur" }],
        gender: [
          { required: true, message: "请选择所属平台", trigger: "change" }
        ]
      },
      total: 10,
      addEditTitle: "新增",
      dialogFormVisible: false
    }
  },
  methods: {
    onReset() {},
    fetchData() {},
    onAdd() {},
    handleClick(value) {
      console.log("value", value)
    },
    handleMenuList(value) {
      console.log("value", value)
    },
    handleDelete(value) {
      console.log("value", value)
    },
    async _getVersion() {
      this.listLoading = true
      const { data } = await getVersion()
      this.formData = data
      this.total = data.length
      this.listLoading = false
      this.$nextTick(() => {
        this.setSort()
      })
    },
    setSort() {
      const el = this.$refs.versionTableRef.$el.querySelectorAll(
        ".el-table__body-wrapper > table > tbody"
      )[0]
      this.sortable = Sortable.create(el, {
        ghostClass: "sortable-ghost",
        setData: function(dataTransfer) {
          dataTransfer.setData("Text", "")
        },
        onEnd: (evt) => {}
      })
    }
  },
  mounted() {
    this._getVersion()
  }
}
</script>
<style>
</style>
