<template>
  

  <div>
    <label for="">Nombre</label>
    <input type="text" v-model="nombre" required />
    <label for="">Apellido</label>
    <input type="text" v-model="apellido" required />
    <label for="">Cedula</label>
    <input type="text" v-model="cedula" required />

    <button @click="guardarEstudiante">Ingresar</button>

  <div class="tabla">

    <table border="10" v-if="lista">

      <tr>

        <th>ID</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Cedula</th>

      </tr>

      <tr v-for="item in lista" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.nombre }}</td>
        <td>{{ item.apellido }}</td>
        <td>{{ item.cedula }}</td>

      </tr>

    </table>

  </div>
  
  </div>

</template>

<script>
import { ingresarEstudianteFachada } from "../helpers/EstudianteClienteApi";

export default {


  data() {
    return {
      id: null,
      nombre: null,
      apellido: null,
      lista: [],
      cedula: null,
    };
  },

  methods: {
   async guardarEstudiante() {
      const data={

                nombre:this.nombre,
                apellido:this.apellido,
                cedula:this.cedula

            };

            const estudiante= await ingresarEstudianteFachada(data);
            this.listado.push(estudiante)
    },


  },
};
</script>

<style>
</style>

