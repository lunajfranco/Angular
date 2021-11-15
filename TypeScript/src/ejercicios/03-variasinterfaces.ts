interface SuperHeroe{
    nombre:string;
    edad:number;
    direccion: Direccion
    mostrarUbicacion: () => string;
}
interface Direccion{
    calle: string;
    pais:string;
    ciudad:string;
}

const superHeroe: SuperHeroe = {
nombre:'carlos',
edad:30,
direccion:{
    calle:'stst ts',
    pais: 'USA',
    ciudad: 'Aregnetina'
},
mostrarUbicacion(){
    return this.nombre+ ', ' + this.direccion.pais + ', ' + this.direccion.ciudad;
}
}
const ubicacion= superHeroe.mostrarUbicacion();
console.log(ubicacion)