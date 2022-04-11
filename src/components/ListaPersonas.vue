<template>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Sexo</th>
            <th scope="col">Acción</th>
            </tr>
        </thead>
    <tbody>
        <tr v-for="item in personas" :key="item.id">
        <th scope="row">{{item.id}}</th>
        <td>{{item.nombre}}</td>
        <td>{{item.sexo}}</td>
        <td>
            <button class="btn btn-danger btn-sm" @click="deletePersonas(item.id)">
                Eliminar
            </button>
            <router-link 
                class="btn btn-warning ml-2 btn-sm"
                :to="{
                    name: 'Editar',
                    params: {
                        id: item.id
                    }
                }"
            >
                Editar
            </router-link>
        </td>
        </tr>
    </tbody>
    </table>
</template>

<script>
import {mapState, mapActions} from 'vuex'
    export default {
        computed:{
            ...mapState(['personas'])
        },
        methods: {
            ...mapActions(['deletePersonas'])
        }
    }
</script>