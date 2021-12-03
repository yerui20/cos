<template>
    <svg class='icon' @click="$emit('click',$event)">
        <use v-bind:xlink:href="'#'+name" />
    </svg>
</template>

<script setup lang="ts">
 let importAll = (requireContext:__WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../assets/icons', true, /\.svg$/))
} catch (error) {
  console.log('这是svg的报错')
  console.log(error)
}
export default{
    props:['name'],
    name:'svgIcons'
}
</script>

<style scoped>
.icon{
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill:currentColor;
    overflow: hidden;
}
</style>