import axios from 'axios'
import baseURL from './baseURL'
import { ElMessage } from 'element-plus'
import Cookies from 'js-cookie'

const request = axios.create({
  baseURL
})

request.interceptors.request.use(
  (config) => {
    const data = config.method === 'get' ? config.params : config.data
    for (const obj in data) {
      data[obj] === '' && delete data[obj]
    }
    const token = Cookies.get('csrftoken')
    if (token) {
      return {
        ...config,
        headers: {
          'X-CSRFToken': token
        }
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    if (/^20./g.test(`${response.status}`)) {
      if (response.headers['content-type'] === 'application/octet-stream') {
        const filename = response.headers['content-disposition']
          .split(';')[1]
          .split('=')[1]
        return { data: response.data, filename }
      }
      return response.data
    } else {
      ElMessage.error(response.data.data.detail)
      return Promise.reject(response.data.data.detail)
    }
  },
  (error) => {
    if (error.response.status === 401) {
      sessionStorage.removeItem('vuex')
      location.reload()
    }
    ElMessage.error(error.response.data.detail)
    return Promise.reject(error)
  }
)

export default request
