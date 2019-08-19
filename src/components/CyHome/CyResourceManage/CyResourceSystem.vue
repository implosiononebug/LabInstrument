<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix system-header">
                <h2 class="float-left">业务系统管理</h2>
                <el-button @click="dialogFormVisible = true" class="float-right button-primary" type="primary">新增系统</el-button>
                <!-- 新增系统弹出层 -->
                <el-dialog title="新增系统" :visible.sync="dialogFormVisible">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="编号" prop="number">
                            <el-input v-model="ruleForm.number"></el-input>
                        </el-form-item>
                        <el-form-item label="名称" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="部署地址" prop="deployaddress">
                            <el-input v-model="ruleForm.deployaddress"></el-input>
                        </el-form-item>
                        <el-form-item label="备用地址">
                            <el-input v-model="ruleForm.backupaddress"></el-input>
                        </el-form-item>
                        <el-form-item label="活动形式">
                            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                        <el-button @click="dialogFormVisible = false">返回</el-button>
                    </div>
                </el-dialog>
                <!-- 新增系统弹出层技术 -->
                <!-- 编辑 -->
                <el-dialog title="编辑" :visible.sync="EditformVisible">
                    <el-form v-model="currentRuleData"  label-width="100px" class="demo-ruleForm">
                        <el-form-item label="编号">
                            <el-input v-model="currentRuleData.number"></el-input>
                        </el-form-item>
                        <el-form-item label="名称">
                            <el-input v-model="currentRuleData.name"></el-input>
                        </el-form-item>
                        <el-form-item label="部署地址">
                            <el-input v-model="currentRuleData.deployaddress"></el-input>
                        </el-form-item>
                        <el-form-item label="备用地址">
                            <el-input v-model="currentRuleData.backupaddress"></el-input>
                        </el-form-item>
                        <el-form-item label="活动形式">
                            <el-input v-model="currentRuleData.desc" type="textarea"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="SavedFormData">保存</el-button>
                        <el-button @click="EditformVisible = false">返回</el-button>
                    </div>
                </el-dialog>
                <!-- 编辑结束 -->
                <!-- 查看 -->
                <el-dialog title="查看" :visible.sync="WatchformVisible">
                    <el-form v-model="currentRuleData"  label-width="100px" class="demo-ruleForm">
                        <el-form-item label="编号">
                            <el-input v-model="currentRuleData.number" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="名称">
                            <el-input v-model="currentRuleData.name" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="部署地址">
                            <el-input v-model="currentRuleData.deployaddress" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="备用地址">
                            <el-input v-model="currentRuleData.backupaddress" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="活动形式">
                            <el-input v-model="currentRuleData.desc" type="textarea" disabled></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="WatchformVisible = false">返回</el-button>
                    </div>
                </el-dialog>
                <!-- 查看结束 -->
            </div>
            <div class="text item">
                <template>
                    <el-table
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column
                        label="编号"
                        width="180">
                            <template slot-scope="scope">
                                <span>{{ scope.row.number }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                        label="名称"
                        width="180">
                            <template slot-scope="scope">
                                 <span>{{ scope.row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                        label="部署地址"
                        width="180">
                            <template slot-scope="scope">
                                 <span>{{ scope.row.deployaddress }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                        label="备用地址"
                        width="180">
                            <template slot-scope="scope">
                                 <span>{{ scope.row.backupaddress }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button
                                size="mini" 
                                class="button-primary" 
                                type="primary"
                                @click="handelWatch(scope.$index, scope.row)" >查看</el-button>
                                <el-button
                                size="mini"
                                type="success"
                                @click="handleEdit(scope.$index, scope.row)" >编辑</el-button>
                                <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)" >删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </div>
            <template>
            <div class="block">
                <span class="demonstration"></span>
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                    </el-pagination>
            </div>    
        </template>
        </el-card>
    </div>
</template>

<style scoped>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.system-header > .button-primary {
    margin: 1.25em 0 1.25em 0;
}


.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}

.li.active {
    color: #409eff !important;
    cursor: default;
}
</style>

<script>
export default {
    name: 'CyResourceSystem',
    components: {

    },
    data() {
        return {
            tableData: [{
                number: 'Matrix',
                name: '康曼一卡通',
                deployaddress: '47.101.40.198',
                backupaddress: '114.116.72.22',
                desc: ''
            }],
        dialogFormVisible: false,
        EditformVisible: false,
        WatchformVisible: false,
        ruleForm: {
            number: '',
            name: '',
            deployaddress:'',
            backupaddress:'',
            desc: ''
        },
        currentRuleData: {
            number: '',
            name: '',
            deployaddress:'',
            backupaddress:'',
            desc: ''
        },
        currentDataId:"",
        rules: {
          number: [
              { required: true, message: '请输入编号', trigger: 'blur' }
            ],
          name: [
              { required: true, message: '请输入名称', trigger: 'blur' },
          ],
          deployaddress: [
              { required: true, message: '请输入部署地址', trigger: 'blur' }
          ]
        },
        formLabelWidth: '120px',
        currentPage4: 4
        }
    },
    methods: {
      handelWatch(index,row) {
        this.WatchformVisible = true;
        this.currentRuleData = row;
      },
      SavedFormData() {
          if(this.tableData[this.currentDataId]){
              this.tableData.splice(this.currentDataId, 1 ,this.currentRuleData);
          } 
          this.EditformVisible = false;
      },
      handleEdit(index, row) {
        this.EditformVisible = true;
        this.currentRuleData = row;
        this.currentDataId = index;

      },
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.tableData.splice(index,1)        
        }).catch(() => {});
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.tableData.push({
                number: this.ruleForm.number,
                name: this.ruleForm.name,
                deployaddress: this.ruleForm.deployaddress,
                backupaddress: this.ruleForm.backupaddress,
                desc: this.ruleForm.desc
            })
            this.ruleForm.number="";
            this.ruleForm.name="";
            this.ruleForm.backupaddress="";
            this.ruleForm.deployaddress="";
            this.ruleForm.desc="";
            this.dialogFormVisible = false;
            this.$message({
                message: '添加成功',
                type: 'success'
            });
          } else {
            console.log('error submit!!');
            return false;
          } 
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
}
</script>