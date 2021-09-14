import Bhaskara from './bhaskara.js'
const mostrar = () => {
    const  a = document.getElementById("inp_A").value
    const  b = document.getElementById("inp_B").value
    const  c = document.getElementById("inp_C").value
    const instancia = new Bhaskara()
    instancia.coef_a = a
    instancia.coef_b = b
    instancia.ti_c = c
    //ejecute la funcion que calcula la raiz 1
    const r1 = instancia.calcularRaiz1()
    //ejecute la funcion que calcula la raiz 2
    const r2 = instancia.calcularRaiz2()
    document.getElementById ("r1").textContent = 'r1='+r1
    document.getElementById ("r2").textContent = 'r2='+r2
}
const boton = document.getElementById ("btn_calcular")
boton.addEventListener("click", mostrar)