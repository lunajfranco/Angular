class PersonaNormal{
    constructor(
        public nombre: string,
        public Direccion: string
    ){}
}
class Heroe extends PersonaNormal{
//     alterEgo: string;
//     edad: number;
//     nombreReal: string;
constructor(
    public alterEgo: string,
    public edad:number,
    public nombreReal: string
){
    super(nombreReal, 'New York, USA');
}
}

const ironman = new Heroe('IronMan', 35, 'tony');

console.log(ironman)