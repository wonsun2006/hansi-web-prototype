import Vue from "vue";
import Vuex from "vuex";
import router from "./router"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers:[
      {id:1, name:'wonsun', user_ID:"wonsun2006", user_pwd:"1111"},
      {id:2, name:'taehyun', user_ID:"tennybang", user_pwd:"1111"}
    ],
    isLogin: false,
    isLoginError: false,
  },
  mutations: {
    loginSuccess(state, payload){
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    loginError(state){
      state.isLoginError = true
      state.isLogin = false
    },
     logout(state){
       state.isLogin = false
       state.isLoginError = false
       state.userInfo = null
     }
  },
  actions: {
    login({state, commit}, loginObj){
      let selectedUser = null
      state.allUsers.forEach(user=>{
        if(user.user_ID === loginObj.user_ID) selectedUser = user
      })
      if(selectedUser===null||selectedUser.user_pwd !== loginObj.user_pwd)
       commit("loginError")
       else{
        commit("loginSuccess", selectedUser)
        router.push({name:"mypage"})
       }
    },
    logout({commit}){
      commit("logout")
      router.push({name: "home"})
    }
  }
});
