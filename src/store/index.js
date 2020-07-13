import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state: {
    userid:'',
    username:''
  },
  mutations: {
    getuserid(state,payload){
      state.userid=payload;
    },
    getusername(state,payload){
      state.username=payload;
    }
  },
})
export default store
