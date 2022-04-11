<template>
    Editar{{$route.params.id}}
    <form @submit.prevent="updatePersona(persona)">
        <Input :persona="persona" />
    </form>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Input from '../components/Input'
export default {
    components:{
        Input
    },
    computed: {
        ...mapState(['persona'])
    },
    methods: {
        ...mapActions(['setPersona', 'updatePersona'])
    },
    created(){
        this.setPersona(this.$route.params.id)
    }
}
</script>