<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link> 
        </li>
       <li class="nav-item">
         <router-link class="nav-link" to="/about">About</router-link> 
        </li>
       <li v-if="user?.email !=null" class="nav-item">
         <router-link class="nav-link" to="/catalogo">Carga de productos</router-link>
        </li>
        <li class="nav-item"> 
          <router-link class="nav-link" to="/cargaproductos">Catalogo</router-link>      
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        <li v-if="user?.email == null" class="nav-item">
          <router-link class="nav-link" to='/autenticacion'>Ingresar</router-link>
        </li>
        <li>
          <h8 class="nav-link">{{user?.email}}</h8>
        </li>
        <li v-if="user?.email !=null" class="nav-item">
          <button @click="cerrar_sesion()" class="btn btn-secondary">Cerrar sesion</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container mt-3">
    <router-view/>
</div>
</template>
<script>
import {auth} from '@/utils/firebase.js'
import {onAuthStateChanged,signOut} from 'firebase/auth'
export default {
  data(){
    return{
      user:null
    }
  },
  methods:{
    usuario_logeado(){
      onAuthStateChanged(auth,(user)=>{
        this.user=user
      })
    },
      async cerrar_sesion(){
      await signOut(auth)
    },
  },
  mounted(){
    this.usuario_logeado()
  }
}
</script>


