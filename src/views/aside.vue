<template>
   <div class='aside-container' style="width:100%"> 

    <h4 class='title'>COS工单查询系统</h4>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
       <i class="el-icon-document"></i>
          <span>工单列表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><router-link to='/table'>内容状态日志</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to='/table2'>工单分发</router-link></el-menu-item>
        </el-menu-item-group>              
      </el-submenu>              
    </el-menu>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff" 
      active-text-color="#ffd04b">
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-custom"></i>       
          <span>用户管理</span>
        </template>
        <el-menu-item-group> 
          <el-menu-item index="1-1"><router-link to="/menber">用户列表</router-link></el-menu-item>   
        </el-menu-item-group>              
      </el-submenu>              
    </el-menu>
  </div> 
  
</template>

<script lang="ts">
import Vue from 'vue'
export default  Vue.extend({
    name:'Aside'
})
</script>

<style lang='scss'>

 .title{
   text-align: center;
 }
 a {
  text-decoration: none;
  color: inherit;
}
</style>