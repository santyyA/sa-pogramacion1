export default class Bhaskara {
    coef_a;
    coef_b;
    ti_c;
    constructor(a,b,c){
        this.coef_a = a;
        this.coef_b = b;
        this.ti_c = c;
    }
    calcularRaiz1 (){
        const bloque1 = (Math.pow(this.coef_b,2)) - (4*this.coef_a*this.ti_c)
        const raiz = Math.sqrt(bloque1)
        const resultado_r1 = (-this.coef_b + raiz) / (2*this.coef_a)
        return resultado_r1;  
    }
    calcularRaiz2 (){
        const bloque1 = (Math.pow(this.coef_b,2)) - (4*this.coef_a*this.ti_c)
        const raiz = Math.sqrt(bloque1)
        const resultado_r2 = (-this.coef_b - raiz) / (2*this.coef_a)
        return resultado_r2;
    }

}