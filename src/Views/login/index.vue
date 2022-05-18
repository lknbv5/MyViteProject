<template>
  <div>{{value}}</div>
</template>

<script setup lang='ts'>
   import {ref,defineProps} from 'vue'
   const value=ref('登录页面')
   const props=defineProps<{msg:string}>();
</script>

<style lang='SCSS' scoped>

</style>