<script setup>
import {ref} from 'vue'

const props = defineProps({
  img: String,
  email: String
})

const activeName = ref('overview')
</script>

<template>
  <div v-if="isDesktop" style="height: 300px">
    <el-row :gutter="40">
      <el-col :span="5">
        <el-image :src="props.img" :style="{boxShadow: `var(--el-box-shadow)`, height: '175px'}" fit="cover"></el-image>
      </el-col>
      <el-col :span="19">
        <div class="name-slot">
          <slot name="name"/>
          <a :href="'mailto:' + props.email" class="link">
            <el-icon>
              <Message/>
            </el-icon>
            {{ props.email }}
          </a>
        </div>

        <el-tabs v-model="activeName">
          <el-tab-pane label="Overview" name="overview">
            <el-scrollbar :always="true" max-height="180px">
              <slot name="titles"/>
            </el-scrollbar>
          </el-tab-pane>

          <el-tab-pane label="Profile" name="profile">
            <el-scrollbar :always="true" max-height="180px">
              <slot name="profile"/>
            </el-scrollbar>
          </el-tab-pane>

          <el-tab-pane label="Interests" name="interests">
            <el-scrollbar :always="true" max-height="180px">
              <slot name="interests"/>
            </el-scrollbar>
          </el-tab-pane>

        </el-tabs>
      </el-col>
    </el-row>
  </div>

  <div v-else class="mobile-page">
    <div style="text-align: center">
      <el-image :src="props.img" :style="{boxShadow: `var(--el-box-shadow)`, height: '175px'}" fit="cover"></el-image>
    </div>

    <div class="name-slot" style="text-align: center">
      <slot name="name"/>
      <a :href="'mailto:' + props.email" class="link">
        <el-icon>
          <Message/>
        </el-icon>
        {{ props.email }}
      </a>
    </div>

    <el-tabs v-model="activeName">
      <el-tab-pane label="Overview" name="overview">
        <el-scrollbar :always="true" max-height="180px">
          <slot name="titles"/>
        </el-scrollbar>
      </el-tab-pane>

      <el-tab-pane label="Profile" name="profile">
        <el-scrollbar :always="true" max-height="180px">
          <slot name="profile"/>
        </el-scrollbar>
      </el-tab-pane>

      <el-tab-pane label="Interests" name="interests">
        <el-scrollbar :always="true" max-height="180px">
          <slot name="interests"/>
        </el-scrollbar>
      </el-tab-pane>

    </el-tabs>
  </div>

  <el-divider/>
</template>

<script>
export default {
  data() {
    return {
      isDesktop: true,
    }
  },
  mounted() {
    this.isDesktop = window.innerWidth >= 768
    window.addEventListener('resize', () => {
      console.log(1)
      this.isDesktop = window.innerWidth >= 768
    })
  }
}
</script>

<style>

.mobile-page .el-tabs__nav {
  float: none !important;
  justify-content: center !important;
}

.el-tabs__content {
  font-family: 'Nexus Sans Pro', sans-serif;
}

.el-tabs__content ul {
  margin: 0 !important;
  padding: 0 !important;
}

.el-tabs__content p {
  margin: 0 !important;
  padding: 0 !important;
}

.el-tabs__content ol {
  margin: 0 !important;
  padding: 0 !important;
}

.name-slot > h2 {
  margin: 0 !important;
  padding: 0 !important;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  text-decoration: none !important;
}

.name-slot span {
  font-size: 1.75rem;
  font-weight: bold;
}

.name-slot {
  font-family: 'Nexus Serif Pro', sans-serif
}

</style>
