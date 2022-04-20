<template>
  <el-card class="common-card">
    <div class="common-title">commitlint 简介及配置</div>
    <div class="common-content">
      <div class="common-sub-title">
        <svg-icon svgClass="common-sub-svg" iconName="watch"></svg-icon>
        <span>commitlint 是什么</span>
      </div>
      <p class="common-content-block">
        commitlint 是一个git commit校验约束工具。当我们运行git commmit -m
        'xxx'时，来检查'xxx'是不是满足团队约定好的提交规范。提交格式如下图
        <el-image
          :src="commitConfig"
          :preview-src-list="[commitConfig]"
          :initial-index="4"
          :hide-on-click-modal="true"
          class="common-content-img"
          fit="cover"
        />
      </p>
      <p class="common-content-block">
        实现效果：
        <el-image
          :src="commit1"
          :preview-src-list="[commit1, commit2, commit3]"
          :initial-index="4"
          :hide-on-click-modal="true"
          class="common-content-img"
          fit="cover"
        />
      </p>
      <div class="common-sub-title">
        <svg-icon svgClass="common-sub-svg" iconName="calculator"></svg-icon>
        <span>commitlint 配置</span>
      </div>
      <p class="common-content-block">
        配合husky使用，运行npx husky add .husky/commit-msg "npx --no-install
        commitlint --edit $1"命令
        <el-image
          :src="commit"
          :preview-src-list="[commit]"
          :initial-index="4"
          :hide-on-click-modal="true"
          class="common-content-img"
          fit="cover"
        />
      </p>
      <p class="common-content-block">
        文档地址：
        <a
          target="_bank"
          href="https://github.com/conventional-changelog/commitlint"
        >
          https://github.com/conventional-changelog/commitlint
        </a>
      </p>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import commitConfig from '@/assets/commitConfig.jpg'
import commit from '@/assets/commit.jpg'
import commit1 from '@/assets/commit1.jpg'
import commit2 from '@/assets/commit2.jpg'
import commit3 from '@/assets/commit3.jpg'
</script>
