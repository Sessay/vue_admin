<template>
  <el-card class="common-card">
    <el-image
      style="width: 100px; height: 100px"
      :src="ending"
      :initial-index="4"
      class="ending-img"
      fit="cover"
    />
    <el-image
      style="width: 100px; height: 100px"
      :src="reword"
      :preview-src-list="[wx, zfb]"
      :initial-index="4"
      :hide-on-click-modal="true"
      class="money-img"
      fit="cover"
      :z-index="1100"
    />
  </el-card>
</template>

<script lang="ts" setup>
import reword from '@/assets/reword.png'
import ending from '@/assets/ending.png'
import wx from '@/assets/wx.jpg'
import zfb from '@/assets/zfb.jpg'
</script>

<style lang="less" scoped>
.ending-img {
  width: 850px !important;
  height: auto !important;
  margin: auto;
  display: block;
}
.money-img {
  width: 40px !important;
  height: auto !important;
  position: absolute;
  top: 300px;
  left: 810px;
}
</style>
