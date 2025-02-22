<script setup>

const props = defineProps({
  doi: String
})

</script>

<template>
  <div>
    <div class="title">
      <slot name="title"/>
    </div>

    <span class="author-names">
      <slot name="author"/>
    </span>

    <div style="margin-top: 5px;">
      <el-scrollbar :always="true" class="abstract" max-height="180px">
        <slot name="abstract"/>
      </el-scrollbar>
      <a :href="doi">{{ doi }}</a>
    </div>


    <div class="keywords">
      <slot name="keywords"/>
    </div>

  </div>
  <el-divider/>
</template>

<style>
.title {
  padding: 0 !important;
  margin: 0 !important;
}

.title h4 {
  padding: 0 !important;
  margin: 0 !important;
}

.author-names > p {
  font-size: 15px;
  margin: 5px 0 0;
  padding: 0 !important;
  color: #606266;
  line-height: 22.5px;
}

.keywords {
  margin: 5px 0 0;
  margin-left: -12px;
}

.abstract p, .abstract {
  margin: 0;
  color: #909399;
  font-size: 15px;
  line-height: 22.5px;
}

</style>