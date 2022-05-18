<template>
  <div>{{value}}</div>
</template>

<script setup lang='ts'>
   import {ref,defineProps} from 'vue'
   const value=ref('首页')
   const props=defineProps<{msg:string}>();
</script>

<style lang='SCSS' scoped>

</style>

