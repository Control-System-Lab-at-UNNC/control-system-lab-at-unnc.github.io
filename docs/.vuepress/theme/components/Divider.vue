<script setup>

</script>

<template>
  <el-divider class="divider-text" content-position="left">
    <slot name="content"></slot>
  </el-divider>
</template>

<style>

.el-divider__text h2 {
  padding: 0 !important;
  margin: 0 !important;
}

.divider-text span {
  font-size: 25px !important;
  font-weight: bold !important;
}

</style>