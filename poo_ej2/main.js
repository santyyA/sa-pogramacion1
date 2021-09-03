import Area from './area.js'
const mostrarAreaCirc = () =>{
    const r = document.getElementById("inp_radio").value
    const instancia = new Area ()
    instancia.radio = r;
    const resultado1 = instancia.calcularRadio()
    document.getElementById("resultado1").textContent = 'resultado='+resultado1
}
const mostrarAreaTrian = () =>{
    const b = document.getElementById("inp_base").value
    const a = document.getElementById("inp_altura").value 
    const instancia1 = new Area ()
    instancia1.base=b;
    instancia1.altura=a;
    const resultado2 = instancia1.calcularAreatrian()
    document.getElementById("resultado2").textContent='resultado='+resultado2   
}
const mostrarAreaTrap = () => {
    const basesup = parseInt (document.getElementById ("inp_basesup").value)
    const baseinfer = parseInt (document.getElementById ("inp_baseinfer").value)
    const altura1 = parseInt (document.getElementById ("inp_H").value)
    const intastancia2 = new Area ()
    intastancia2.basesup=basesup;
    intastancia2.baseinfer=baseinfer;
    intastancia2.altura1=altura1;
    const resultado3 = intastancia2.calcularAreaTrap ()
    document.getElementById("resultado3").textContent='resultado='+resultado3
}
const boton = document.getElementById ("btn_calcular")
boton.addEventListener("click", mostrarAreaCirc)
const boton1 = document.getElementById ("btn_calcular1")
boton1.addEventListener ("click",mostrarAreaTrian)
const boton2 = document.getElementById("btn_calcular2")
boton2.addEventListener("click",mostrarAreaTrap)
