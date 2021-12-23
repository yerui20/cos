<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="节点">
        <el-input v-model="formInline.sendnode" placeholder="节点"></el-input>
      </el-form-item>
      <el-form-item label="处理状态">
        <el-select v-model="formInline.state" placeholder="处理状态">
          <el-option label="状态0" value="0"></el-option>
          <el-option label="状态2" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  <div v-if="total!=0">
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
      :current-page="formInline.pageNo"
      :page-size="formInline.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total=total>
    </el-pagination>
      </div>
  </div>
  </div>
</template>

<script>
import {screen} from '@/api/collection'
export default {
  name: "table3",
  data() {
    return {
      total:0,
        Taskhandleyi: [
        {
          correlateid: "",
          errordescription: "",
          id: '',
          lowerhairobj: "",
          lowerhairobjcode: "",
          lowerhairobjname: "",
          lowerhairobjuniqueid: "",
          requestcompletedate: "",
          requestfile:
            "",
          responsecompletedate: "",
          responsefile: "",
          sendnode: "",
          state: "",
          upcorrelateid: "",
          upcspid: "",
          uplspid: "",
        },
      ],
      formInline: {
        sendnode: "",
        state: "",
        pageNo: 1,
        pageSize: 20,
      },
    };
  },
  methods: {
      handleCurrentChange(val){
        this.formInline.pageNo=val
        this.tableInit()
      },
      handleSizeChange(val){
        this.formInline.pageSize=val
        this.tableInit()
      },

    onSubmit() {
      this.tableInit()
      console.log(this.formInline);
    },
    tableInit(){
        screen(this.formInline).then((res)=>{
          this.Taskhandleyi=res.data.rows
        //   this.formInline.sendnode=''
        //   this.formInline.state=''
          this.total=res.data.total
          console.log(res)
          })
    }
  },
};
</script>

<style lang="scss" scoped>
</style>