import request from '@/utils/request.js';

// 获取验证码
export const reqCode = async (phone) => {
  return await request({
    url: '/captcha/sent',
    params: {
      phone
    }
  })
} 

// 校验验证码
export const checkCode = async (data) => {
  return await request({
    url: '/captcha/verify',
    params: data,
  })
}

// 检查昵称是否重复
export const CheckNickname = async (nickname) => {
  return await request({
    url: '/nickname/check',
    params: {
      nickname,
    }
  })
}

// 注册
export const regiset = async (data) => {
  return await request({
    url: '/register/cellphone',
    params: data,
  })
}
// 登录
export const loginTo = async (data) => {
  return await request({
    url: '/login/cellphone',
    params: data,
  })
}
// 检验登录状态
export const checkLoginStatus = async () => {
  return await request({
    url: '/login/status',
  })
}