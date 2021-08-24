const calcular = () => {
    const datoA = document.getElementById ("inp_datoA").value;
    const datoB = document.getElementById ("inp_datoB").value;
    const datoC = document.getElementById ("inp_datoC").value; 
    let bloque1 = (Math.pow(datoB,2)) - (4*datoA*datoC)
    let raiz = Math.sqrt(bloque1)
    let r1 = (-datoB + raiz) / (2*datoA)
    let r2 = (-datoB - raiz) / (2*datoA)
    let resultado = 'raiz 1='+r1+'  '+' raiz 2='+r2
    document.getElementById ("h_resultado").textContent = resultado
}
const boton = document.getElementById("btn_calcular")
boton.addEventListener("click", calcular)