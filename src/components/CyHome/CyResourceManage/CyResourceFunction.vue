<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix system-header">
                <h2 class="float-left">功能</h2>
            </div>
            <div class="text item">
                <el-row class="functionContent">
                    <el-col :span="12">
                        <div class="functionMenu">
                            <el-select v-model="value" clearable placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="functionDet">

                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
.text {
    font-size: 14px;
    
}

.functionContent {
    display: flex;
    flex-direction: row;
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


</style>

<script>
export default {
    name: 'CyResourceFunction',
    data() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: ''
        }
    },
    methods: {

    }
}
</script>