export interface Producto{
    desc: string;
    precio:number;
}

export function CalcularISV( producto: Producto[]): [number, number]{

    let total= 0;
    producto.forEach( ({ precio }) => {
        total += precio;
    })
    return [total, total *0.15]
}