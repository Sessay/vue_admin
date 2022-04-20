import { Module } from 'vuex'
import { User } from '../type'
import { login, logout, GetUserInfo } from '@/api/login'

const userModule: Module<User, any> = {
  namespaced: true,
  state: {
    admin_level: 0,
    name: '',
    username: ''
  },
  mutations: {
    SET_Level: (state, roles: number) => {
      state.admin_level = roles
    },
    SET_NAME: (state, name: string) => {
      state.name = name
    },
    SET_Username: (state, username: string) => {
      state.username = username
    }
  },
  actions: {
    // user login
    login({ commit }, userInfo: any) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then((res: any) => {
            commit('SET_Level', res.admin_level)
            commit('SET_NAME', res.name)
            commit('SET_Username', res.username)
            resolve(res)
          })
          .catch((error: any) => {
            reject(error)
          })
      })
    },

    // user logout
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        logout()
          .then((res: any) => {
            commit('SET_Level', '')
            commit('SET_NAME', '')
            commit('SET_Username', '')
            resolve(res)
          })
          .catch((error: any) => {
            reject(error)
          })
      })
    },

    // get userInfo
    getInfo({ commit }) {
      return new Promise((resolve, reject) => {
        GetUserInfo()
          .then((res: any) => {
            const { admin_level, name, username } = res
            commit('SET_Level', admin_level)
            commit('SET_NAME', name)
            commit('SET_Username', username)
            resolve(res)
          })
          .catch((error: any) => {
            reject(error)
          })
      })
    }
  }
}

export default userModule
