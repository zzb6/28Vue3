import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     user:[],

  },
  mutations: {
    user(state,obj){
      state.user.push(obj);

    },
      // hobby(state,obj){
      //     state.hobby.push(obj);
      //
      // },
      // introduce(state,obj){
      //     state.introduce.push(obj);
      //
      // },

  },

  actions: {

  }
})
