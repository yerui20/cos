<template>
  <el-container>
    <el-aside width="250px" class="aside">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        active-text-color="#ffd04b"
        style="border: none"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>工单列表</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <i class="el-icon-s-order"></i>
              <router-link to="/table">内容状态日志</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-s-claim"></i>
              <router-link to="/table2">工单列表</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <i class="el-icon-s-claim"></i>
              <router-link to="/table3">工单查询</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>

      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        active-text-color="#ffd04b"
        style="border: none"
       
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <i class="el-icon-s-order"></i>
              <router-link to="/menber">用户列表</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header><TopList /></el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Layout from "@/components/layout.vue";
import x from "@/assets/icons/user.svg";
import Aside from "./aside.vue";
import TopList from "@/components/topList.vue";
console.log(x);
export default {
  name: "Index",
  components: { Layout, Aside, TopList },

  methods: {},
};
</script>

<style scoped lang='scss'>
.aside {
}
</style>
