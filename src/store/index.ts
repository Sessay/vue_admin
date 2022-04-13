import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      name: '后台管理项目'
    }
  }
})

export default store
