// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }
//     makeSound() {
//         console.log(`${this.name} the ${this.species} says: ${this.sound}`);
//     }
// }


class Animal {
    constructor(public name: string, public species: string, public sound: string) {
    }
    
    makeSound() {
        console.log(`${this.name} the ${this.species} says: ${this.sound}`);
    }
}

const dog = new Animal("Buddy", "Dog", "Woof");
console.log(dog.name);
dog.makeSound();

const cat = new Animal("Whiskers", "Cat", "Meow");
console.log(cat.name);
cat.makeSound();