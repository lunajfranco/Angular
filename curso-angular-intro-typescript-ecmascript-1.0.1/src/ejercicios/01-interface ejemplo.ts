interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; 
}

const personaje: Personaje = {
nombre: 'carlos',
hp: 20,
habilidades: ['saltar', 'correr']
}  

personaje.puebloNatal= 'La ferrer';
console.log(personaje)