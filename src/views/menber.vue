<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">新增用户</el-button>
    <!-- 新增dialog -->
    <el-dialog
      title="新增用户"
      :visible.sync="dialogVisible"
      width="30%"
      top="20px"
    >
      <el-form :model="newForm" :rules="newUserRules" ref="newForm">
        <el-form-item label="用户名" prop="account">
          <el-input
            v-model="newForm.account"
            autocomplete="off"
            placeholder="请输入4-10位长度用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input
            v-model="newForm.name"
            autocomplete="off"
            placeholder="请输入4-10位长度用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio v-model="newForm.sex" label="男">男</el-radio>
          <el-radio v-model="newForm.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input
            v-model="newForm.phone"
            autocomplete="off"
            placeholder="请输入11位电话号码"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="newForm.email"
            autocomplete="off"
            placeholder="xxx@xxx.com"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="newForm.password"
            autocomplete="off"
            placeholder="请输入6-15位长度密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="note">
          <el-input v-model="newForm.note" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('newForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 用户列表 -->
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
            <p>{{ scope.row.lastupdatepasswordtime }}</p>
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

      <el-table-column label="性别" width="50px">
        <template slot-scope="scope">
          <span>{{ scope.row.sex }}</span>
        </template>
      </el-table-column>

      <el-table-column label="状态" width="50px">
        <template slot-scope="scope">
          <span>{{ scope.row.status }}</span>
        </template>
      </el-table-column>

      <el-table-column label="上次修改时间">
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

    <!-- 分页 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { userList } from "@/api/user";
export default {
  name: "menber",
  data() {
    return {
      newUserRules: {
        account: [{ required: true, message: "账号不能为空", trigger: "blur" }],
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
        sex: [{ required: true, message: "请选择活动资源", trigger: "blur" }],
        phone: [
          { required: true, message: "电话不能为空", trigger: "blur" },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: "请输入正确手机号", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "请输入6-12位长度的密码",
            trigger: "change",
          },
        ],
        email: [{ required: true, message: "email不能为空", trigger: "blur" },{
         pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message: "请输入正确邮箱号", trigger: "blur"
        }],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "请输入6-12位长度的密码",
            trigger: "change",
          },
        ],
      },
      newForm: {
        account: "",
        createtime: "string",
        email: "",
        id: 0,
        lastlogintime: "string",
        lastupdatepasswordtime: "string",
        logincount: 0,
        name: "",
        note: "",
        password: "",
        phone: "",
        picture: "string",
        role: "string",
        sex: "",
        status: "string",
        updatetime: "string",
        usertype: "string",
      },
      dialogVisible: false,
      currentPage: 1,
      pagesize: 20,
      total: 1,
      data: {
        pageNo: 1,
        pageSize: 20,
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
    submitForm(newForm) {
      this.$refs[newForm].validate((valid) => {
        if (valid) {
          console.log(this.newForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //这是分页的函数
    handleSizeChange(val) {
      this.data.pageSize = val;
      this.userList();
    },
    handleCurrentChange(val) {
      this.data.pageNo = val;
      this.userList();
    },
    //初始化表格数据
    userList() {
      userList(this.data).then((res) => {
        this.tableData = res.data.rows;
        this.total = res.data.total;
      });
    },
    //表格行内操作
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  created() {
    this.userList();
  },
};
</script>

<style lang="scss" scoped>
</style>