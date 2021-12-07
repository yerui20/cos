<template>
<div>
    <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="文件路径"
      prop="cmdfileurl">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>文件路径: {{ scope.row.cmdfileurl }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">文件路径</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="工单号"
      prop="correlateid">
    </el-table-column>
    <el-table-column
      label="创建时间"
      prop="createdate">
    </el-table-column>
    <el-table-column
      label="上级节点"
      prop="cspid">
    </el-table-column>
    <el-table-column
      label="主键"
      prop="id">
    </el-table-column>
    <el-table-column
      label="下级节点"
      prop="lspid">
    </el-table-column>
    <el-table-column
    width="80"
      label="优先级"
      prop="runlevel">
    </el-table-column>
    <el-table-column
    width="80"
      label="状态"
      prop="runlevel">
    </el-table-column>
    <el-table-column
      label="执行时间"
      prop="runlevel">
    </el-table-column>
    <el-table-column
      label="操作"
     >
     <template slot-scope="scope">
       <el-col>
        <el-button
          width="150"
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">修改优先级</el-button>
       </el-col>
       <el-col class="buttonX">
        <el-button
          size="mini"
          type="danger"
          width="150"
          @click="handleDelete(scope.$index, scope.row)">重置状态</el-button>
       </el-col>
      </template>
    </el-table-column>
    <!-- <el-table-column
    label="操作"
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入工单号搜索"/>
      </template>
      <template slot-scope="scope" >
        <el-button
        :span="24"
        class="buttonX"
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">修改优先级</el-button>

        <el-button
        :span="24"
        class="buttonY"
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">重置状态</el-button>
      </template>
    </el-table-column> -->
  </el-table>

分页
  <div class="block">
    <span class="demonstration">调整每页显示条数</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  </div>
</template>

<script >
import Vue from "vue";
export default Vue.extend({
  components: {},
  data() {
      return {
        tableData: [{
          cmdfileurl: "ftp://wacos:Rss123,wacos@172.25.44.45:21//opt/wacos/CTMSData/dispatch/smg_dispatch/2021/11/29/9/810721221/CQLTCOS_2345079_CQBKLIANTONG_smp_19008912-234681-35-58-27784-35-9.xml",
          correlateid:"111111",
          createdate:"2021-11-29 10:54:05.396",
          cspid: "CQBK",
          id: 63863043,
          lspid: "CQLTCOS",
          runlevel:1,
          status:"0",
          updatedate:""  
        },  ],
        search: ''
      }
    },
  methods:{
    handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
  },
});
</script>

<style scoped>
.input1 {
  width: 200px;
  margin-right: 10px;
}
.buttonX{
  padding-top: 5px;
}
.buttonY{
  padding-top: 5px;
}

</style>