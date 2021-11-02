interface Producto{
    nombre: string;
    cantidad:number;
    detalle: Detalle
}
interface Detalle{
    nombreDetalle:string;
}

const producto: Producto={
    nombre:'Carlos',
    cantidad:63,
    detalle:{
        nombreDetalle : 'coca'
    }
}
//Desestructuracion de objetos{}
const {nombre, cantidad, detalle} = producto
const { nombreDetalle } = detalle 
//Desestructuracion de Arrays[]
const color: string[] = ['blanco', 'Negro', 'gris']
const [color1, color2, color3] = color
//const [ , , color3] = color (para acceder solo al ultimo valor del array)
console.log('el nombre es ' + color3)
console.log('la cantidad es ' + cantidad)
console.log('el nombrede detalle es ' + nombreDetalle)
