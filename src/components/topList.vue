<template>
  <div class='container'>
    <div class='index'>首頁</div>
    <div>
    <el-dropdown>
      <div class="el-dropdown-link">
        <svg-icons name="user" class='user-img'/>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>個人信息</el-dropdown-item>
        <el-dropdown-item divided>退出</el-dropdown-item>
        
      </el-dropdown-menu>
    </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import SvgIcons from "./svgIcons.vue";


export default Vue.extend({
  components: {SvgIcons  },
  name: "topList",
});
</script>

<style scoped>
.container{
display:flex;
justify-content:space-between;
align-items: center;
}
.el-dropdown-link{
  
  
}
.el-icon-user-solid{
 
  width: 16px;
  height: 16px;
}
.user-img{
  width: 90px;
  height: 40px;
  padding-right: 10px;
}
</style>