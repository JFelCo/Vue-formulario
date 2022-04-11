<template>
    <input 
      type="text"
      class="form-control my-2"
      placeholder="Ingrese nombre"
      v-model.trim="persona.nombre"
    >  

    <div class="mt-2">
      <div class="form-check form-check-inline">
        <input
          type="radio"
          id="radio-1"
          class="form-check-input"
          value="Femenino"
          v-model="persona.sexo"
        >
        <label for="radio-1" class="form-check-label">Femenino</label>
      </div>

        <div class="form-check form-check-inline">
          <input
            type="radio"
            id="radio-2"
            class="form-check-input"
            value="Masculino"
            v-model="persona.sexo"
          >
          <label for="radio-2" class="form-check-label">Masculino</label>
        </div>

        <div class="form-check form-check-inline">
          <input
            type="radio"
            id="radio-3"
            class="form-check-input"
            value="Otro"
            v-model="persona.sexo"
          >
          <label for="radio-3" class="form-check-label">Otro</label>
        </div>
    </div>

    <button 
    class="btn btn-dark mt-2 btn-block" 
    type="submit"
    :disabled="bloquear"
    > 
      Procesar
    </button>
</template>

<script>
export default {
    props: {
        persona: Object
    },
    computed: {
        bloquear(){
        return this.persona.nombre.trim() === "" ? true : false
        }
     }
}
</script>