<template>
  <div>
    <el-card class="box-card"
             shadow="never">
      <div slot="header"
           class="header">
        <span>仪器类型</span>
        <el-button class="button-primary"
                   type="primary"
                   @click="openDialog('create')">新建</el-button>
      </div>
      <div class="text item">
        <el-table :data="tableData"
                  style="width: 100%"
                  size="small"
                  border>
          <el-table-column label="编号"
                           width="180">
            <template slot-scope="scope">
              <span>{{ scope.row.number }}</span>
            </template>
          </el-table-column>
          <el-table-column label="名称"
                           width="180">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="备注"
                           width="180">
            <template slot-scope="scope">
              <span v-html="scope.row.remark"></span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini"
                         class="button-primary"
                         type="primary"
                         @click="openDialog('edit',scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini"
                         type="danger"
                         @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="block text-right">
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page.sync="currentPage1"
                       :page-size="100"
                       background
                       layout="total, prev, pager, next"
                       :total="1000">
        </el-pagination>
      </div>
    </el-card>
    <!-- 模态框 -->
    <el-dialog :title="currentFormName"
               :visible.sync="FormVisible">
      <el-form :model="form"
               :rules="rules"
               ref="form"
               label-width="100px">
        <el-form-item label="编号"
                      :label-width="formLabelWidth"
                      prop="number">
          <el-input size="small"
                    v-model="form.number"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="名称"
                      :label-width="formLabelWidth"
                      prop="name">
          <el-input size="small"
                    v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="备注"
                      :label-width="formLabelWidth"
                      prop="remark">
          <vue-editor v-model="form.remark"
                      :editorToolbar="customToolbar">
          </vue-editor>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="backForm('form')">返 回</el-button>
        <el-button type="primary"
                   @click="submitForm('form',currentFormName)">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 模态框结束 -->
  </div>
</template>

<style scoped>
.ql-toolbar.ql-snow .ql-picker-label {
  border: 0 !important;
}
.box-card {
  width: 100% !important;
}
.box-card .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>

<script>
export default {
  name: 'CyInstrumentType',
  data () {
    return {
      currentPage1: 1,
      FormVisible: false,
      formLabelWidth: '100px',
      currentFormName: '',
      currentIdx: '',
      isWatch: false,
      customToolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ["strike", "bold", "italic", "underline"],
        [{ align: '' }, { align: "center" }, { align: "right" }, { align: "justify" }],
        [{ 'color': [] }, { 'background': [] }],
        [{ indent: '+1' }, { indent: '-1' }],
        ["image"]
      ],
      tableData: [{
        number: '1',
        name: '电子显微镜',
        remark: '。。。'
      }, {
        number: '2',
        name: '电子显微镜',
        remark: '。。。'
      }],
      rules: {
        number: [
          { required: true, message: '请输入编号', trigger: 'blur', disabled: true },
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        remark: [
          { required: false }
        ]
      },
      form: {
        number: '',
        name: '',
        remark: ''
      }
    }
  },
  methods: {
    openDialog (operate, index, row) {
      if (operate == 'create') {
        this.currentFormName = "新建仪器类型"
        this.FormVisible = true;
      }
      else if (operate == 'edit') {
        this.currentFormName = "编辑仪器类型"
        this.FormVisible = true;
        this.currentIdx = index;
        this.form = {
          name: this.tableData[index].name,
          number: this.tableData[index].number,
          remark: this.tableData[index].remark
        }
      }
      else if (operate == 'watch') {
        this.currentFormName = "查看"
        this.FormVisible = true;
        this.isWatch = !this.isWatch
        this.form = {
          name: this.tableData[index].name,
          number: this.tableData[index].number,
          remark: this.tableData[index].remark
        }
      }
    },
    handleDelete (index, row) {
      this.$confirm('是否删除该仪器类型?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
      });
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    },
    submitForm (formName, operate) {
      if (operate == '新建仪器类型') {
        this.$refs[formName].validate((valid) => {
          let temporary = this.form;
          if (valid) {
            this.tableData.push(temporary);
            this.FormVisible = false;
            this.form = {
              number: '',
              name: '',
              remark: ''
            }
            this.$message({
              message: '新建仪器类型成功',
              type: 'success'
            });
          } else { }
        });
      }
      else if (operate == '编辑仪器类型') {
        this.$refs[formName].validate((valid) => {
          let temporary = this.form;
          if (valid) {
            this.tableData.splice(this.currentIdx, 1, temporary);
            this.form = {
              number: '',
              name: '',
              remark: ''
            }
            this.FormVisible = false;
            this.$message({
              message: '编辑成功',
              type: 'success'
            });
          }
          else { }
        });
      }
    },
    backForm (formName) {
      if (this.currentFormName != '查看') {
        this.$refs[formName].resetFields();
      }
      if (this.currentFormName == '查看') {
        this.isWatch = !this.isWatch
      }
      this.FormVisible = false;
      this.form = {
        number: '',
        name: '',
        remark: ''
      }
    }
  }
}
</script>