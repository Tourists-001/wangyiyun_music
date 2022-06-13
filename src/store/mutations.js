import {setStore} from '@/utils/localStrong'
export default {
  //  存储注册信息，以后整和信息
  saveInfo(state, {
    phone,
    password,
    captcha,
    nickname
  }) {
    state.captcha = captcha
    state.nickname = nickname
    state.phone = phone
    state.password = password

  },
  // 存储uid
  saveUid(state, uid) {
    state.uid = uid
    setStore('uid',uid)
  }
}