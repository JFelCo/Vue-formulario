<template>
  <form @submit.prevent="procesarFormulario">
    <Input :persona="persona"/>
  </form>
  <hr>
  <ListaPersonas />
</template>

<script>

import Input from '../components/Input.vue'
import ListaPersonas from '../components/ListaPersonas.vue'
import {mapActions} from 'vuex'
const shortid = require('shortid');

export default {
  name: 'HomeView',
  components: {
    Input, ListaPersonas
  },
  data() {
    return{
      persona:{
        id: '',
        nombre: '',
        sexo:[],
      }
    }
  },
  methods:{
    ...mapActions(['setPersonas']),
    procesarFormulario(){
      //generar id
      this.persona.id= shortid.generate()
      //enviar datos
      this.setPersonas(this.persona)

      //limpiar datos
      this.persona={
        id: '',
        nombre: '',
        sexo: []
      }
    }
  },
  
}
</script>
