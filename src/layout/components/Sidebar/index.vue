<template>
  <div class="sidebar-container">
    <div class="logo" @click="$router.push('/')">
      <transition name="fade-transform" mode="out-in">
        <div class="flex-center logo-title">
          <img class="logo-img" src="../../../assets/logo.png" alt="logo" />
          <h1 v-show="opened" class="logo-text">编程规范</h1>
        </div>
      </transition>
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :router="true"
        class="v-enter-to"
        :default-active="activeMenu"
        :collapse="isCollapse"
        :show-timeout="200"
        text-color="#606266"
        mode="vertical"
      >
        <SidebarItem
          v-for="item in routerList"
          :key="item.path"
          :index="item.path"
          :nav="item"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import store from '../../../store/index'
import SidebarItem from './SidebarItem.vue'
import { useRoute, useRouter } from 'vue-router'
let routerList = ref([{ path: '' }])
const opened = computed(() => store.state.app.sidebar.opened)
const isCollapse = computed(() => !opened.value)

const activeMenu = computed(() => {
  const route = useRoute()
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})

onMounted(() => {
  filterRoutes()
})

/**
 * 过滤路由
 */
const filterRoutes = () => {
  const router = useRouter()
  const routes = router.options.routes
  routerList.value = routes.filter(
    (arg) => arg.path !== '/' || arg.children?.length
  )
}
</script>

<style lang="less" scoped="scoped">
.logo {
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  height: 60px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  // .logo-title {
  //   padding-left: 8px;
  // }
  .logo-img {
    width: 30px;
    height: 25px;
    margin-right: 5px;
  }
  .logo-text {
    display: inline-block;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
