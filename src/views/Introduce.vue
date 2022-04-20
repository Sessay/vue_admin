<template>
  <el-card class="common-card">
    <div class="common-title">为什么要遵循编程规范</div>
    <div class="common-content">
      <div class="common-sub-title">
        <svg-icon svgClass="common-sub-svg" iconName="hairpin"></svg-icon>
        <span>编程规范的意义</span>
      </div>
      <p class="common-content-block">
        俗话说，无规矩不成方圆。在实际研发中，可能存在研发维护人员的更替或者由于长时间不维护项目造成的记忆模糊、混乱等情况，
        导致对代码所实现的真正功能的理解有困难和歧义。编码风格的不同，对项目也会有不同的影响，统一的编码规范有益于提高研发
        效率、降低后期维护开发的成本，也提高了代码复查效率和效果。
      </p>
      <div class="common-sub-title">
        <svg-icon svgClass="common-sub-svg" iconName="edit"></svg-icon>
        <span>高质量代码编写原则</span>
      </div>
      <b>a. 增加代码可读性 -- 注释清晰、命名语义化</b>
      <b>b. 提高代码重用性 -- 公共组件和私有组件的维护</b>
      <p class="common-contentb-block">
        设计公用组件时需要考虑让接口保持弹性，并且高度模块化，多处重复使用不允许轻易被修改，
        必要时需要提供 REAME.md 使用说明或规范的API 文档和演示 DEMO。
      </p>
      <b>c. 尽可能的减少冗余和精简代码</b>
      <p class="common-contentb-block">
        通过尽可能精简的代码和优秀的算法，使代码加载和使用方便的同时往精简靠拢，前端部分体现：loder按需加载组件、es6箭头函数使用等。
      </p>
      <b>d. 磨刀不误砍柴工 -- 前期的构思很重要</b>
      <p class="common-contentb-block">
        构思内容为规范的制定、公共组件的设计和复杂功能的技术方案等。
      </p>
      <b>e. codeReview</b>
      <p class="common-contentb-block">
        codeReview主要目的是为了发现错误、健壮性检查（代码是否健壮，是否有潜在安全、性能风险）、质量保证（在一般情况下，新提交的代码一定需要测试）、统一风格、互相学习。
      </p>
      <div class="common-sub-title">
        <svg-icon
          svgClass="common-sub-svg"
          style="margin-bottom: 2px"
          iconName="cakes"
        ></svg-icon>
        <span>基本规范</span>
      </div>
      <b>1. 文件资源命名</b>
      <p class="common-contentb-block">
        以可读性而言，用小写字母命名或小写字母与下划线组合命名文件名与文件所在的文件夹。尽量使用语义化，与业务或功能相关的词来命名（比如
        main_list、file_upload）。图片静态资源命名，使用小写字母命名或小写字母与下划线组合命名（比如
        imgbg.jpg，home_top_img.png）。确保文件命名总是以字母开头而不是数字。
        特殊含义的文件，需要对文件增加前后缀或特定的扩展名（比如 .min.js,
        .min.css, .config.json），抑或一串前缀（比如 all.main.min.css）。
      </p>
      <b>2. 组件结构化</b>
      <p class="common-contentb-block">
        目录按照组织结构进行创建，使得组件便于理解。前端示例如下图：
        <el-image
          class="common-content-img"
          :src="menuImg"
          :preview-src-list="[menuImg]"
          :initial-index="4"
          :hide-on-click-modal="true"
          fit="cover"
        />
      </p>
      <b>3. 函数命名</b>
      <p class="common-contentb-block">
        can：判断是否可执行某个动作，函数返回一个布尔值。
      </p>
      <p class="common-contentb-block">
        has：判断是否含有某个值， 函数返回一个布尔值。
      </p>
      <p class="common-contentb-block">
        is：判断是否为某个值，函数返回一个布尔值。
      </p>
      <p class="common-contentb-block">
        get：获取某些数据，函数返回一个非布尔值。
      </p>
      <p class="common-contentb-block">
        set：设置某个值，无返回值、返回是否设置成功或者返回链式对象。
      </p>
      <p class="common-contentb-block">
        load：加载某些数据,无返回值或者返回是否加载完成的结果。
      </p>
      <b>4. CSS BEM</b>
      <p class="common-contentb-block">
        BEM 的意思就是块（block）、元素（element）、修饰符（modifier），是由
        Yandex 团队提出的一种前端命名方法论。命名约定的模式是.block{}、
        .block__element{}、.block--element{}。block代表了更高级别的抽象或组件，
        block__element代表 .block的后代，用于形成一个完整的.block的整体，
        block--modifier表示.block的不同状态或不同版本。如.person_male、.person_male--color。
      </p>
      <b>5. Eslint + Prettier</b>
      <p class="common-contentb-block">
        预先制定编码规范，使用 Eslint + Prettier
        工具检测代码风格，可以辅助编码规范执行，有效控制代码质量。EsLint
        用来校验代码规范，Prettier用来统一代码风格，格式化代码。支持
        js、ts、css、less、scss、json、jsx。而且集成了
        vscode、vim、webstorm、sublime text 插件。点击链接
        <a
          target="_blank"
          href="https://eslint.org/docs/user-guide/getting-started"
        >
          Eslint
        </a>
        了解具体规则。
      </p>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import menuImg from '../assets/menu.jpg'
</script>
