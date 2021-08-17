const calcular = () => {
    const c_opuesto = document.getElementById("inp_c_opuesto").value;
    const c_adyacente = document.getElementById("inp_c_adyacente").value;
    const bloque1 = Math.pow(c_opuesto,2) + Math.pow (c_adyacente,2);
    const resultado = Math.sqrt(bloque1);
    console.log (resultado)
}
const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",calcular)