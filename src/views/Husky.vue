<template>
  <el-card class="common-card">
    <div class="common-title">husky 简介及配置</div>
    <div class="common-content">
      <div class="common-sub-title">
        <svg-icon svgClass="common-sub-svg" iconName="search"></svg-icon>
        <span>husky 是什么</span>
      </div>
      <p class="common-content-block">
        husky 是一个Githooks工具。Githooks简单来说那就是类似Vue的生命周期钩子
        一样，Git也会在它运行周期里面的某些时间点，让用户添加和执行自定义的函数。项目中Githooks能做什么？
      </p>
      <p class="common-contentb-block common-ul-li">
        问题：远程仓库的代码中存在语法错误
      </p>
      <p class="common-contentb-block common-ul-li">
        原因：有成员没有仔细检查，误把有语法错误的代码上传了
      </p>
      <p class="common-contentb-block common-ul-li">
        解决方法：在commit之前检查在暂存区的代码，看是否存在语法错误
      </p>
      <p class="common-content-block">
        如果只靠当前成员去检查自己添加到暂存区的代码有没有错误，是很不可靠且低效的行为，那么这里我们可以用到pre-commit这一个hook了，它可以在git
        commit之前执行我们自定义的语句，当执行错误或者返回非0状态的时候阻止commit行为。
      </p>
      <div class="common-sub-title">
        <svg-icon svgClass="common-sub-svg" iconName="multiuser"></svg-icon>
        <span>husky 配置</span>
      </div>
      <p class="common-content-block">
        下图中创建hooks命令换位npx husky add .husky/pre-commit "yarn
        lint"，即可配合eslint使用。
        <el-image
          :src="husky"
          :preview-src-list="[husky]"
          :initial-index="4"
          :hide-on-click-modal="true"
          class="common-content-img"
          fit="cover"
        />
      </p>
      <p class="common-content-block">
        文档地址：
        <a target="_bank" href="https://typicode.github.io/husky">
          https://typicode.github.io/husky
        </a>
      </p>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import husky from '@/assets/husky.jpg'
</script>
