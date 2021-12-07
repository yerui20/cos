<template>
  <div>
<div>
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
  </div>
</template>

<script>
  export default {
    name:"table2",
    data(){
      return{
       Taskhandleyi :{
      correlateid: "53047498037169287",
      errordescription: "",
      id: 63863471,
      lowerhairobj: "",
      lowerhairobjcode: "00000001000000010000000155773652",
      lowerhairobjname: "分类(小小智慧树)->节目(小小智慧树 20211112HD)",
      lowerhairobjuniqueid: "",
      requestcompletedate: "2021-11-29 11:01:47.623",
      requestfile: "ftp://test:test1991@10.137.192.8:21//home/test/workordernew/53047498037169287.xml",
      responsecompletedate: "",
      responsefile: "",
      sendnode: "yaxin",
      state: "0",
      pcorrelateid: "7260795",
      upcspid: "CQBK1",
      uplspid: "CQLTCOS"
    }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>