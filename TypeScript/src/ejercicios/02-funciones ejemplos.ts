function sumar(a:number, b:number) : number{
    return a+b;
}
const sumar2 = (a:number, b:number): number =>{
    return a+b;
}

function multiplicar(a:number, b?:number, c:number = 2):number{
    return a*c;
}

interface PersonajePlr{
    nombres:string;
    pv:number;
    mostrarHp: () =>  void;
}
function sumarPv(personaje: PersonajePlr, curaX:number){
    return personaje.pv+curaX;
}
const personajePlr: PersonajePlr = {
    nombres:'carlito',
    pv:50,
    mostrarHp(){
        console.log('Puntos de vida', this.pv)
    }
}
console.log(sumarPv(personajePlr, 34))