import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 登出
export function logout(data) {
  return request({
    url: '/user/logout',
    method: 'post',
    data
  })
}

// 获取用户信息
export function GetUserInfo(params) {
  return request({
    url: '/user/userinfo',
    method: 'get',
    params
  })
}

// 注册用户
export function RegistUser(data) {
  return request({
    url: '/user/admin',
    method: 'post',
    data
  })
}

// 修改密码
export function ChangePassword(data) {
  return request({
    url: '/user/account',
    method: 'put',
    data
  })
}
