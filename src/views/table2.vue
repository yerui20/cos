<template>
  <div>
    <div>
      <el-table :data="Taskhandleyi" style="width: 100%">
        <el-table-column label="系统工单号" prop="correlateid">
        </el-table-column>
        <el-table-column label="描述信息" prop="errordescription">
        </el-table-column>
        <el-table-column label="名称" prop="lowerhairobjname">
        </el-table-column>
        <el-table-column label="反馈时间" prop="responsecompletedate">
        </el-table-column>
        <el-table-column label="节点" prop="sendnode"> </el-table-column>
        <el-table-column label="状态" prop="state"> </el-table-column>
        <el-table-column label="播控工单号" prop="upcorrelateid">
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
  </div>
</template>

<script>
export default {
  name: "table2",
  data() {
    return {
      currentPage: 1,
      pageSize: 100,
      total: 1,
      listpage: {
        pageNo:"",
        pageSize:"",
      },
      Taskhandleyi: [
        {
          correlateid: "53047498037169287",
          errordescription: "",
          id: 63863471,
          lowerhairobj: "",
          lowerhairobjcode: "00000001000000010000000155773652",
          lowerhairobjname: "分类(小小智慧树)->节目(小小智慧树 20211112HD)",
          lowerhairobjuniqueid: "",
          requestcompletedate: "2021-11-29 11:01:47.623",
          requestfile:
            "ftp://test:test1991@10.137.192.8:21//home/test/workordernew/53047498037169287.xml",
          responsecompletedate: "",
          responsefile: "",
          sendnode: "yaxin",
          state: "0",
          pcorrelateid: "7260795",
          upcspid: "CQBK1",
          uplspid: "CQLTCOS",
        },
      ],
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>