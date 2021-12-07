<template>
  <div>
    <el-input
      v-model="input"
      placeholder="请输入工单号"
      class="input1"
    ></el-input>
    <el-button @click="resetDateFilter">查询</el-button>
    <el-table :data="tableData" border style="width: 100%" height="250">
      <el-table-column fixed prop="date" label="文件路径" width="200">
      </el-table-column>
      <el-table-column prop="name" label="工单号" width="200">
      </el-table-column>
      <el-table-column prop="province" label="创建时间" width="200">
      </el-table-column>
      <el-table-column prop="city" label="上级节点" width="150">
      </el-table-column>
      <el-table-column prop="address" label="主键" width="200">
      </el-table-column>

      <el-table-column prop="zip1" label="下级节点" width="150">
      </el-table-column>
      <el-table-column prop="zip2" label="优先级" width="100"> </el-table-column>
      <el-table-column prop="zip3" label="状态" width="100"> </el-table-column>
      <el-table-column prop="zip4" label="执行时间" width="150">
      </el-table-column>
      <el-table-column  label="操作" width="150">
        <el-button @click="handleClick(scope.row)" type="text" size="small"
          >查看</el-button
        >
        <el-button type="text" size="small">编辑</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script >
import Vue from "vue";
export default Vue.extend({
  components: {},
  data: {
    return: {
      tableData:[{
      date: '2016-05-04',
      province:"1234",
      name:"111",
      city:"2222",
      address:"1111",
      zip1:"$$4",
      zip2:"4444",
      zip1:"ewrew",
      zip1:"sdgtst"
    }]},
  },
  mounted() {},
});
</script>

<style scoped>
.input1 {
  width: 200px;
  margin-right: 10px;
}
</style>