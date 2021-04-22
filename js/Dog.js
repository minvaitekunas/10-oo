class Dog {
    constructor(name, color,sound, canEatTillDeath) {
    
        this.name = name;
        this.sound = sound;
        this.color = color;
        this.canEatTillDeath = false;

    }
    voice() {
        console.log(`${this.name}  ${this.sound}`);

    }
    introduce() {
        console.log(`as esu ${this.name} mano kailis${this.color} ir moku sakyti ${this.sound}`);

}

}
module.exports = Dog;
