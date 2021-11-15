function Generico<T>(generic: T) {
    return generic;
}


let string = Generico('hola');
let numero = Generico(23);
let array = Generico([1,2,3,4,5,6,7,8,9]);

console.log(string,numero,array);