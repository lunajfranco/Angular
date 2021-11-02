import { CalcularISV, Producto } from './05 exportar funciones-interfaces'
const carritoCompras : Producto[] = [
    {
        desc : 'coca',
        precio: 230
    },
    {
        desc : 'cocacola',
        precio: 250
    }
];

const [total, isv] = CalcularISV( carritoCompras );
console.log('total', total);
console.log('isv', isv);