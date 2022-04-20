<template>
  <div v-if="nav.meta && !nav.hide" class="menu-wrapper">
    <!-- 一级菜单 -->
    <el-menu-item
      v-if="!nav.children || !nav.children.length || nav.meta.type === 'one'"
      :index="
        nav.meta.type === 'one'
          ? `${nav.path}/${nav.children[0].path}`
          : nav.path
      "
      :class="{ 'submenu-title-noDropdown': !nav.isNest }"
    >
      <el-icon v-if="nav.meta.icon" class="elIcon">
        <component :is="nav.meta.icon" />
      </el-icon>
      <template #title>
        <span>{{ nav.meta.title }}</span>
      </template>
    </el-menu-item>
    <div
      v-else-if="nav.meta.type === 'onemore'"
      :class="{ 'submenu-title-noDropdown': !nav.isNest }"
    >
      <div v-for="child in nav.children" :key="child.path">
        <SidebarItem
          v-if="child.children && child.children.length"
          :key="child.path"
          :index="child.path"
          :is-nest="true"
          :nav="child"
          class="nest-menu"
        />
        <el-menu-item
          v-else-if="!child.meta.hidden"
          :index="`${nav.path}/${child.path}`"
        >
          <svg-icon :iconName="child.meta.icon" svg-class="menu-svg"></svg-icon>
          <template #title>
            <span class="menu-title-animate">{{ child.meta.title }}</span>
          </template>
        </el-menu-item>
      </div>
    </div>
    <el-sub-menu v-else :index="nav.path">
      <!-- 二级菜单 -->
      <template #title>
        <img
          v-if="nav.meta.icon.includes('.')"
          :src="nav.meta.icon"
          class="sidebar-img elIcon"
        />
        <el-icon v-else class="elIcon">
          <component :is="nav.meta.icon" />
        </el-icon>
        <span>{{ nav.meta.title }}</span>
      </template>
      <!-- 三级菜单 -->
      <div v-for="child in nav.children" :key="child.path">
        <SidebarItem
          v-if="child.children && child.children.length"
          :key="child.path"
          :index="child.path"
          :is-nest="true"
          :nav="child"
          class="nest-menu"
        />
        <el-menu-item
          v-else-if="!child.meta.hidden"
          :index="`${nav.path}/${child.path}`"
        >
          <el-icon v-if="child.meta.icon" class="elIcon">
            <component :is="child.meta.icon" />
          </el-icon>
          <template #title>
            <span>{{ child.meta.title }}</span>
          </template>
        </el-menu-item>
      </div>
    </el-sub-menu>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
const props = defineProps({
  nav: {
    type: Object,
    required: true
  },
  isNest: {
    type: Boolean,
    default: false
  }
})
// const getImg = (name: string) => {
//   return new URL(`../../../assets/${name}`, import.meta.url).href
// }
const { nav } = toRefs(props)
</script>

<style lang="less" scoped>
.menu-svg {
  width: 26px;
  height: 26px;
  margin-right: 6px;
}
</style>
