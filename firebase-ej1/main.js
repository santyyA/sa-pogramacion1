//nos comunicamos con nuestra base de datos
const db = firebase.firestore()
const vaciar = () =>{
    document.getElementById("inp_nom").value='';
    document.getElementById("inp_ape").value='';
    document.getElementById("inp_dni").value='';
}
function guardarCliente(){
    const unCliente ={
        nombre:document.getElementById("inp_nom").value,
        apellido:document.getElementById("inp_ape").value,
        dni:document.getElementById("inp_dni").value
    }
    db.collection("cliente").doc().set(unCliente)
    vaciar()
    listarClientes()
}
async function listarClientes()
{
    const clientes = await db.collection("cliente").get()
    let lista_clientes = [];
    const lista_conformada = clientes.docs.map( doc =>{
        lista_clientes = doc.data()
        lista_clientes.id = doc.id;
        return lista_clientes;
    });
    let lista_tr = [];
    //vamos a generar dinamicamente la tabla
    lista_conformada.forEach(element => {
        let tr = `
            <tr>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.dni}</td>
                <td>
                    <button onclick="eliminarCliente('${element.id}')" class="btn btn-danger btn-sm">x</button>
                    <button onclick="editarCliente('${element.nombre}','${element.apellido}',${element.dni},'${element.id}')" class="btn btn-primary btn-sm">Edit</button>
                </td>
            </tr>
        `
        lista_tr.push(tr)
    });
    document.getElementById("tbody").innerHTML = lista_tr.join('')
}
//ejecutamos listaClientes
listarClientes()
function eliminarCliente (id)
{
    db.collection("cliente").doc(id).delete()
    listarClientes()
}
function editarCliente(n,a,d,i)
{
    document.getElementById("inp_nom").value = n;
    document.getElementById("inp_ape").value = a;
    document.getElementById("inp_dni").value = d;
    document.getElementById("inp_id").value = i;
}
function actualizarCliente()
{
    const clienteActualizado ={
        nombre: document.getElementById("inp_nom").value,
        apellido: document.getElementById("inp_ape").value,
        dni: document.getElementById("inp_dni").value,
    }
    let id = document.getElementById("inp_id").value
    db.collection("cliente").doc(id).update(clienteActualizado)
    listarClientes()
}