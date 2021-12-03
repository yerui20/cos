<template>
  <layout>
   <router-view></router-view>   
  </layout>
</template>

<script>

import Layout from '@/components/layout.vue';
import x from '@/assets/icons/user.svg'
console.log(x)
export default {
  name: "Index",
  components:{Layout},
 
  methods: {},
};
</script>

<style scoped lang='scss'>


</style>
