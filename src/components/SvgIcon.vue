<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :href="'#icon-' + iconName" />
  </svg>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    iconName: {
      type: String,
      default: '',
      require: true
    },
    svgClass: {
      type: String
    }
  },
  setup() {
    //获取当前svg目录下的所有svg文件
    const req = require.context('@/assets/svg', false, /\.svg$/)
    //解析
    const requireAll = (requireContext) => {
      return requireContext.keys().map(requireContext)
    }
    requireAll(req)
  }
})
</script>
