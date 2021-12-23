<template>
  <div>
    <!-- 筛选条件 -->
    <div>
      <el-input
        class="input1"
        placeholder="请输入工单号"
        v-model="cosData.correlateid"
        clearable
      >
      </el-input>
      <el-button icon="el-icon-search" circle @click="queryCos"></el-button>

      <el-button type="primary" @click="queryTotal">查询全部</el-button>
    </div>
    <!-- 查询全部 -->
    <div v-if="totalPages">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="文件路径" prop="cmdfileurl">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>文件路径: {{ scope.row.cmdfileurl }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">文件路径</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="工单号" prop="correlateid"> </el-table-column>
        <el-table-column label="创建时间" prop="createdate"> </el-table-column>
        <el-table-column label="上级节点" prop="cspid"> </el-table-column>
        <el-table-column label="下级节点" prop="lspid"> </el-table-column>
        <el-table-column width="80" label="优先级" prop="runlevel">
        </el-table-column>
        <el-table-column width="80" label="状态" prop="runlevel">
        </el-table-column>
        <el-table-column label="执行时间" prop="runlevel"> </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              width="150"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              >重置状态</el-button
            >
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p @click="handleDelete(scope.$index, scope.row, 1)">优先级：1</p>
              <p @click="handleDelete(scope.$index, scope.row, 2)">优先级：2</p>
              <p @click="handleDelete(scope.$index, scope.row, 3)">
                优先级： 3
              </p>
              <div slot="reference" class="name-wrapper">
                <el-button size="mini" width="150">修改优先级</el-button>
              </div>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>

      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          background
          :current-page="data.pageNo"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="data.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>

    <!-- 按工单查询 -->
    <div v-if="cosPage">
      <el-table :data="cosTableData" style="width: 100%">
        <el-table-column label="文件路径" prop="cmdfileurl">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>文件路径: {{ scope.row.cmdfileurl }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">文件路径</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="工单号" prop="correlateid"> </el-table-column>
        <el-table-column label="创建时间" prop="createdate"> </el-table-column>
        <el-table-column label="上级节点" prop="cspid"> </el-table-column>
        <el-table-column label="下级节点" prop="lspid"> </el-table-column>
        <el-table-column width="80" label="优先级" prop="runlevel">
        </el-table-column>
        <el-table-column width="80" label="状态" prop="runlevel">
        </el-table-column>
        <el-table-column label="执行时间" prop="runlevel"> </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              width="150"
              size="mini"
              @click="coshandleEdit(scope.$index, scope.row)"
              >重置状态</el-button
            >
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p @click="handleDelete(scope.$index, scope.row, 1)">优先级：1</p>
              <p @click="handleDelete(scope.$index, scope.row, 2)">优先级：2</p>
              <p @click="handleDelete(scope.$index, scope.row, 3)">
                优先级： 3
              </p>
              <div slot="reference" class="name-wrapper">
                <el-button size="mini" width="150">修改优先级</el-button>
              </div>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>

      <div class="block">
        <el-pagination
          @size-change="coshandleSizeChange"
          @current-change="coshandleCurrentChange"
          background
          :current-page="cosData.pageNo"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="cosData.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="cosTotal"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script >
import Vue from "vue";
import { getAccepEventList,getListCos } from "@/api/CosController";
import axios from "axios";
export default Vue.extend({
  components: { axios },
  data() {
    return {
      //工单查询的数据
      cosPage: false,
      cosTotal: null,
      cosData: {
        correlateid:'',
        pageNo: 1,
        pageSize: 100,
      },
      cosTableData: [
        {
          cmdfileurl:
            "ftp://wacos:Rss123,wacos@172.25.44.45:21//opt/wacos/CTMSData/dispatch/smg_dispatch/2021/11/29/9/810721221/CQLTCOS_2345079_CQBKLIANTONG_smp_19008912-234681-35-58-27784-35-9.xml",
          correlateid: "111111",
          createdate: "2021-11-29 10:54:05.396",
          cspid: "CQBK",
          id: 63863043,
          lspid: "CQLTCOS",
          runlevel: 1,
          status: "0",
          updatedate: "",
        },
      ],
      search: "",
      //全部数据的数据
      totalPages: false,
      total: null,
      data: {
        pageNo: 1,
        pageSize: 100,
      },
      tableData: [
        {
          cmdfileurl:
            "ftp://wacos:Rss123,wacos@172.25.44.45:21//opt/wacos/CTMSData/dispatch/smg_dispatch/2021/11/29/9/810721221/CQLTCOS_2345079_CQBKLIANTONG_smp_19008912-234681-35-58-27784-35-9.xml",
          correlateid: "111111",
          createdate: "2021-11-29 10:54:05.396",
          cspid: "CQBK",
          id: 63863043,
          lspid: "CQLTCOS",
          runlevel: 1,
          status: "0",
          updatedate: "",
        },
      ],
    };
  },
  methods: {

    //按工单查询的页面函数
    queryCos(){
      console.log('cos')
      this.totalPages = false
      this.cosPage=true
      this.cosGetList()
    },
   cosGetList() {
      // let data = JSON.parse(JSON.stringify(this.data));
      // console.log(data);
      getListCos(this.cosData)
        .then((res) => {
          this.cosTableData = res.data.rows
          this.cosTotal = res.data.total
          console.log(res.data)
        })
        .catch((err) => {
          console.log("获取数据失败", err)
        });
    },

    //重置状态
    coshandleEdit(index, row, level) {
      
      console.log(index, row)
    },
    //修改优先级
    coshandleDelete(index, row) {
      console.log(index, row)
    },
    //分页
    coshandleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    coshandleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },

    //查询全部的数据函数
    queryTotal() {
      this.cosData.correlateid=''
      this.totalPages = true
      this.cosPage=false
      this.getList()
    },

    getList() {
      // let data = JSON.parse(JSON.stringify(this.data));
      // console.log(data);
      getAccepEventList(this.data)
        .then((res) => {
          this.tableData = res.data.rows
          this.total = res.data.total
          console.log(res.data)
        })
        .catch((err) => {
          console.log("获取数据失败", err)
        });
    },

    //重置状态
    handleEdit(index, row, level) {
      console.log(index, row)
    },
    //修改优先级
    handleDelete(index, row) {
      console.log(index, row)
    },
    //分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
  },
  created() {
    //this.getList();
  },
});
</script>

<style scoped>
.input1 {
  width: 200px;
  margin-right: 10px;
}
.buttonX {
  padding-top: 5px;
}
.buttonY {
  padding-top: 5px;
}
</style>