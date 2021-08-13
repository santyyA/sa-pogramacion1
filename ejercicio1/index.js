const mostrar = () => {
    const apellido = document.querySelector("#inp_apellido").value;
    const nombre = document.querySelector("#inp_nombre").value;
    console.log(`
        mi apellido es: ${apellido}
        mi nombre es: ${nombre}
    `)
}
const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click",mostrar)