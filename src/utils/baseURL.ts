let baseURL = ''
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = '/api' // 开发环境url
    break
  case 'production':
    // baseURL = 'http://192.168.55.250:8010/api' // 生产环境url
    baseURL = '/api' // 生产环境url
    break
  default:
    baseURL = ''
    break
}

export default baseURL
