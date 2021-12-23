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
          :current-page="listpage.pageNo"
          :page-size="listpage.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {recordList} from '@/api/collection'
export default {
  name: "table2",
  data() {
    return {
      //筛选的数据
      
      //全部时的数据
      total: 1,
      listpage: {
        pageNo: 1,
        pageSize:100,
      },
      Taskhandleyi: [
        {
          correlateid: "530474918193553319",
          errordescription: "",
          id: 63863467,
          lowerhairobj: "",
          lowerhairobjcode: "00000001000000010000000156195938",
          lowerhairobjname: "分类(小小智慧树)->节目(小小智慧树 20211115HD)",
          lowerhairobjuniqueid: "",
          requestcompletedate: "2021-11-29 11:01:41.524",
          requestfile:
            "ftp://test:test1991@172.27.160.8:21//home/test/workordernew/53047491819355331.xml",
          responsecompletedate: "",
          responsefile: "",
          sendnode: "zteIPTV",
          state: "0",
          upcorrelateid: "7260792",
          upcspid: "CQBK1",
          uplspid: "CQLTCOS",
        },
      ],
    };
  },
  methods: {
    //全部工单列表的数据
    handleSizeChange(val){
      this.listpage.pageSize=val
      this.listInit()    
    },
    handleCurrentChange(val){
      this.listpage.pageNo=val
      this.listInit()
    },
   listInit(){
     recordList(this.listpage).then((res)=>{
       this.Taskhandleyi=res.data.rows
       this.total=res.data.total

     })
   }
  },
  created(){
    this.listInit()
  }
};
</script>

<style lang="scss" scoped>
</style>