import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    personas: [],
    persona: {
      id: '',
      nombre: '',
      sexo:[],
    }
  },
  getters: {
  },
  mutations: {
    set(state, payload){
      state.personas.push(payload)
    },
    eliminar(state, payload){
      state.personas = state.personas.filter(item => item.id !== payload)
    },
    persona(state, payload){
      if(!state.personas.find(item => item.id === payload)){
        router.push('/')
        return
      }
      state.persona = state.personas.find(item => item.id === payload)
    },
    update(state, payload){
      state.persona = state.personas.map(item => item.id === payload.id ? payload : item)
      router.push('/')
    }
  },
  actions: {
    setPersonas({ commit }, persona) {
      commit('set', persona)
    },
    deletePersonas({commit}, id){
      commit('eliminar', id)
    },
    setPersona({commit}, id){
      commit('persona', id)
    },
    updatePersona({commit}, persona){
      commit('update', persona)
    },
  },
  modules: {
  }
})
