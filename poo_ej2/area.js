export default class Area{
radio; 
base;
altura;
basesup;
baseinfer;
altura1;
constructor(radio,base,altura,basesup,baseinfer,altura1){
    this.radio=radio;
    this.base=base;
    this.altura=altura;
    this.basesup=basesup;
    this.baseinfer=baseinfer;
    this.altura1=altura1;
}
calcularRadio(){
    const resultado_radio = (Math.PI*Math.pow (this.radio,2))
    return resultado_radio;
}
calcularAreatrian(){
    const resultado_area = (this.base*this.altura) / (2)
    return resultado_area;
}
calcularAreaTrap(){
    const resultado_areatrap = ((this.basesup+this.baseinfer) / 2) * (this.altura1)
    return resultado_areatrap;
}
}
