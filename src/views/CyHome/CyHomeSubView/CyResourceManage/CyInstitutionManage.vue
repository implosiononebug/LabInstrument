<template>
  <div>
    <el-card class="box-card"
             shadow="never">
      <div slot="header"
           class="header">
        <div class="header-btn-box">
          <span>机构</span>
          <div class="button-group">
            <el-button class="button-primary"
                       type="primary"
                       @click="openDialog('create')">新建</el-button>
            <el-button type="success">导出</el-button>
          </div>
        </div>
      </div>
      <div class="text item">
        <div class="search">
          <el-form :inline="true"
                   :model="formInline"
                   class="demo-form-inline">
            <el-form-item label="类型">
              <el-select size="small"
                         v-model="formInline.region"
                         placeholder="全部">
                <el-option label="校内"
                           value="shanghai"></el-option>
                <el-option label="校外"
                           value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="名称">
              <el-autocomplete v-model="formInline.user"
                               :fetch-suggestions="querySearchAsync"
                               placeholder="请输入内容"
                               @select="handleSelect"
                               size="small">
              </el-autocomplete>
            </el-form-item>
            <el-form-item>
              <el-button size="small"
                         class="button-primary"
                         type="primary"
                         @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <el-table :data="tableData"
                  size="small"
                  style="width: 100%"
                  border>
          <el-table-column label="编号"
                           width="100">
            <template slot-scope="scope">
              <span>{{ scope.row.number }}</span>
            </template>
          </el-table-column>
          <el-table-column label="类型"
                           width="100">
            <template slot-scope="scope">
              <span>{{ scope.row.type }}</span>
            </template>
          </el-table-column>
          <el-table-column label="名称"
                           width="100">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="地址"
                           width="100">
            <template slot-scope="scope">
              <span>{{ scope.row.address }}</span>
            </template>
          </el-table-column>
          <el-table-column label="联系人"
                           width="100">
            <template slot-scope="scope">
              <span>{{ scope.row.contact }}</span>
            </template>
          </el-table-column>
          <el-table-column label="电话"
                           width="100">
            <template slot-scope="scope">
              <span>{{ scope.row.phone }}</span>
            </template>
          </el-table-column>
          <el-table-column label="所属机构"
                           width="100">
            <template slot-scope="scope">
              <span>{{ scope.row.subordinate }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini"
                         class="button-primary"
                         type="success"
                         @click="openDialog('watch',scope.$index, scope.row)">查看</el-button>
              <el-button size="mini"
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
        <el-form-item label="类型"
                      :label-width="formLabelWidth"
                      prop="number">
          <el-input size="small"
                    v-model="form.type"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="名称"
                      :label-width="formLabelWidth"
                      prop="name">
          <el-input size="small"
                    v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="描述"
                      :label-width="formLabelWidth"
                      prop="remark">
          <vue-editor v-model="form.remark"
                      :editorToolbar="customToolbar">
          </vue-editor>
        </el-form-item>
        <el-form-item label="所属机构"
                      :label-width="formLabelWidth"
                      prop="number">
          <el-input size="small"
                    v-model="form.subordinate"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="负责人"
                      :label-width="formLabelWidth"
                      prop="number">
          <el-input size="small"
                    v-model="form.charge"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机"
                      :label-width="formLabelWidth"
                      prop="number">
          <el-input size="small"
                    v-model="form.telephone"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址"
                      :label-width="formLabelWidth"
                      prop="number">
          <el-input size="small"
                    v-model="form.address"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="发票抬头"
                      :label-width="formLabelWidth"
                      prop="number">
          <el-input size="small"
                    v-model="form.charge"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="税号"
                      :label-width="formLabelWidth"
                      prop="number">
          <el-input size="small"
                    v-model="form.charge"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="税务注册地址"
                      :label-width="formLabelWidth"
                      prop="number">
          <el-input size="small"
                    v-model="form.charge"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话"
                      :label-width="formLabelWidth"
                      prop="number">
          <el-input size="small"
                    v-model="form.charge"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="开户行"
                      :label-width="formLabelWidth"
                      prop="number">
          <el-input size="small"
                    v-model="form.charge"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="账号"
                      :label-width="formLabelWidth"
                      prop="number">
          <el-input size="small"
                    v-model="form.charge"
                    autocomplete="off"></el-input>
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
.box-card {
  width: 100% !important;
}
.box-card .header {
  display: flex;
  flex-direction: column;
}

.header-btn-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search {
  text-align: left;
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
  name: 'CyInstitutionManage',
  data () {
    return {
      currentPage1: 1,
      FormVisible: false,
      formLabelWidth: '120px',
      currentFormName: '',
      currentIdx: '',
      isWatch: false,
      formInline: {
        user: '',
        region: ''
      },
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
        type: '校外',
        name: '',
        address: '',
        contact: '',
        phone: '',
        subordinate: '',
      }, {
        number: '2',
        type: '校内',
        name: '',
        address: '',
        contact: '',
        phone: '',
        subordinate: '',
      }],
      rules: {
        number: [
          { message: '请输入编号', trigger: 'blur', disabled: true },
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        remark: [
          { required: false }
        ]
      },
      form: {
        type: "校外",
        name: '',
        remark: '。。。',
        subordinate: '',
        charge: '',
        telephone: '',
        address: '',
        invoice: '发票抬头',
        dutyparagraph: '税号',
        registerAddress: '税务注册地址',
        phone: '',
        openningbank: '',
        account: '',
      },
      restaurants: [],
      state: '',
      timeout: null
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!');
    },
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
    },
    querySearchAsync (queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter (queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect (item) {
      console.log(item);
    },
    loadAll () {
      return [
        { "value": "张无忌课题组" }
      ]
    }
  },
  mounted () {
    this.restaurants = this.loadAll();
  }
}
</script>