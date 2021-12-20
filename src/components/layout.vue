<template>
    <div class='container'>
    <div class='aside'>
     <Aside/>
    </div>
    <div class='main'>
      <div class='topList'>
           <top-list />
           <div> 
             <slot>
             </slot>
            </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Aside from '../views/aside.vue';
    import topList from '../components/topList.vue'

    export default Vue.extend({
        name: "Index",
        components:{Aside,topList},
 
        methods: {},
    })
</script>

<style scoped lang='scss'>
.container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  flex-grow: 1;
  .aside{
  width: 22%;
  margin: 10px 10px;
  background: #545c64;
  }
  .main{
    border:1px black solid;
    width: 100%;
    margin: 10px 10px;
    .topList{
      height: 60px;
      
    }
  }
}


.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

</style>