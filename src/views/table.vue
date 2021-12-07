<template>
  <div>
    <div>
      <el-input class="input1" placeholder="请输入工单号" v-model="search" clearable> </el-input>
     <el-button icon="el-icon-search" circle></el-button>
    </div>
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
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
      <el-table-column label="主键" prop="id"> </el-table-column>
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
            <p @click="handleDelete(scope.$index, scope.row, 3)">优先级： 3</p>
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
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script >
import Vue from "vue";
import { getAccepEventList } from "@/api/CosController";
export default Vue.extend({
  components: {},
  data() {
    return {
      totalPage: 2292,
      total: 114572,
      pageSize: 100,
      currentPage: 1,
      page: {
        pageNo: 100,
        pageSize: 1,
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
      search: "",
    };
  },
  methods: {
    //重置状态
    handleEdit(index, row, level) {
      console.log(index, row);
    },
    //修改优先级
    handleDelete(index, row) {
      console.log(index, row);
    },
    //分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  created() {
    const page = this.page;
    console.log(page);
    getAccepEventList(page)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("获取数据失败", err);
      });
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