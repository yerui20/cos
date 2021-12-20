<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="账户号">
        <template slot-scope="scope">
          <span>{{ scope.row.account }}</span>
        </template>
      </el-table-column>

      <el-table-column label="姓名" width="80px">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>邮件: {{ scope.row.email }}</p>
            <p>电话: {{ scope.row.phone }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="创建时间" width="80px">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.createtime }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">创建时间</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="ID" width="60px">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="上次登录时间">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.lastlogintime }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">上次登录时间</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="上次修改密码的时间">
           <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.lastupdatepasswordtime}}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">上次修改时间</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="登录次数">
        <template slot-scope="scope">
          <span>{{ scope.row.logincount }}</span>
        </template>
      </el-table-column>

      <el-table-column label="备注">
        <template slot-scope="scope">
          <span>{{ scope.row.note }}</span>
        </template>
      </el-table-column>

      <el-table-column label="密码">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.password }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">密码</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="头像地址">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.picture }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">头像地址</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="角色" width="80px">
        <template slot-scope="scope">
          <span>{{ scope.row.role }}</span>
        </template>
      </el-table-column>

      <el-table-column label="性别"  width="50px">
        <template slot-scope="scope">
          <span>{{ scope.row.sex }}</span>
        </template>
      </el-table-column>

      <el-table-column label="状态" width="50px">
        <template slot-scope="scope">
          <span>{{ scope.row.status }}</span>
        </template>
      </el-table-column>

      <el-table-column label="上次修改时间" >
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.updatetime }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">上次修改时间</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="用户类型" width="80px">
        <template slot-scope="scope">
          <span>{{ scope.row.usertype }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="150px">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {userList} from '@/api/user'
export default {
  name: "menber",
  data() {
    return {
        data:{
            pageNo:1,
            pageSize:20
        },
      tableData: [
        {
          account: "wangchao",
          createtime: "2020-08-11 10:15:46.47",
          email: "18140059039@163.com",
          id: 122,
          lastlogintime: "2020-08-11 10:04:55.000",
          lastupdatepasswordtime: "",
          logincount: 1,
          name: "王超",
          note: "",
          password: "ASY1Vk6sfNdH1VxoNUK2Pg==",
          phone: "18140059039",
          picture:
            "http://localhost:18081/scp/source/icon/20200324164528uqwtkj5u.jpeg",
          role: "",
          sex: "男",
          status: "2",
          updatetime: "",
          usertype: "1",
        },
      ],
    };
  },
  methods: {
      //初始化表格数据
      userList(){
          userList(this.data).then((res)=>{
              this.tableData=res.data.rows
          })
      },
      //表格行内操作
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  created(){
      this.userList() 
  }
};
</script>

<style lang="scss" scoped>
</style>