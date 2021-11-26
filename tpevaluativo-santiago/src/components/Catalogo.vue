<template>
    <div class='row'>
        <div v-for="producto of lista_producto" v-bind:key="producto.id" class="col-4">
            <div class="card m-3 h-100" style="width: 18rem;">
                <img style="width:25rem; heigth:16rem" class="card-img-top img-thumbnail" :src="producto.url" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{producto.Descripcion}}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{producto.Estado}}</li>
                    <li class="list-group-item">{{producto.Precio}}</li>
                </ul>
                <div class="card-body text-center">
                    <a href="#" class="btn btn-primary" role="button">Comprar</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {db} from '@/utils/firebase.js'
import {collection, onSnapshot} from 'firebase/firestore'
export default {
    name:'Catalogo',
    data(){
        return{
            lista_producto:[],
            url:null,
            Descripcion:'',
            Estado:null,
            Precio:null
        }
    },
    methods:{
        obtenerProducto(){
            onSnapshot(collection(db,'productos'),(snapshot)=>{
                this.lista_producto =[]
                snapshot.docs.map((doc)=>{
                    this.lista_producto.push({...doc.data(),id:doc.id})
                })
            })
        },
      
    },
    mounted(){
        this.obtenerProducto()
    }        
}  
</script>



