<template>
    <div class="row">
        <div class="col-4">
            <div class="mb-3">
                <label class="form-label">Descripcion:</label>
                <input v-model='Descripcion' type="text" placeholder="ingrese la Descripcion" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Precio:</label>
                <input v-model='Precio' type="number" placeholder="ingrese el precio" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Porcentaje de descuento:</label>
                <input v-model="Porcentaje_descuento" type="number" placeholder="ingrese el descuento" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Categoria:</label>
                <input v-model="Categoria" type="text" placeholder="ingrese la categoria" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Stock:</label>
                <input v-model="Stock" type="number" placeholder="ingrese el stock" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Estado:</label>
                <input v-model="Estado" type="text" placeholder="ingrese el estado" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Adjuntar imagen</label>
                <input @change="vista_previa()" id="inp_file" class="form_control" type="file">
            </div>
            <div class="mb-3">
                <img :src="preview" class="img-fluid">
            </div>
            <button @click="guardarProducto()" class="btn btn-info">Guardad</button>
        </div>

        <div class="col-8">
            <table class="table">
                <thead>
                    <tr>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Porcentaje de descuento</th>
                        <th>Categoria</th>
                        <th>Stock</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="producto of lista_producto" v-bind:key="producto.id">
                        <td>{{producto.Descripcion}}</td>
                        <td>{{producto.Precio}}</td>
                        <td>{{producto.Porcentaje_descuento}}</td>
                        <td>{{producto.Categoria}}</td>
                        <td>{{producto.Stock}}</td>
                        <td>{{producto.Estado}}</td>
                        <td>
                            <button @click="eliminarProducto(producto.id)" class="btn btn-danger btn-sm">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import {db,storage} from '@/utils/firebase.js'
import {collection, deleteDoc,doc, onSnapshot,addDoc} from 'firebase/firestore'
import {ref, uploadBytes,getDownloadURL} from 'firebase/storage'
export default {
    name:'CatalogoAdminForm',
    data(){
        return{
            Descripcion:'',  
            Precio:null,
            Porcentaje_descuento:null,
            Categoria:'',
            Stock:null,
            Estado:null,
            lista_producto:[],
            url:null,
            preview:null
        }
    },
    methods:{
        async guardarProducto()
        {
            await this.subir_imagen()
            const unProducto ={
                Descripcion:this.Descripcion,
                Precio:this.Precio,
                Porcentaje_descuento:this.Porcentaje_descuento,
                Categoria:this.Categoria,
                Stock:this.Stock,
                Estado:this.Estado,
                url:this.url
                
            }
            const coleccion = collection(db,'productos')
            await addDoc(coleccion,unProducto)
        },
        obtenerProducto(){
            onSnapshot(collection(db,'productos'),(snapshot)=>{
                this.lista_producto =[]
                snapshot.docs.map((doc)=>{
                    this.lista_producto.push({...doc.data(),id:doc.id})
                })
            })
        },
        eliminarProducto(id){
            deleteDoc(doc(db,'productos',id))
        },
        async subir_imagen(){
            const archivo= document.getElementById('inp_file').files[0]
            const config = ref(storage,'catalogo/'+archivo.name)
            await uploadBytes(config,archivo).then(()=>{
                alert('si se subio')
            })
            this.url = await getDownloadURL(config)
        },
        vista_previa(){
            this.preview = URL.createObjectURL(document.getElementById('inp_file').files[0])
        }
    },
    mounted(){
        this.obtenerProducto()
    }
}
</script>