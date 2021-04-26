class Hamster {
    constructor(name, color, canEatTillDeath) {
    
        this.name = name;
        this.sound = 'rar';
        this.color = color;
        this.canEatTillDeath = true;

    }
    voice() {
        console.log(`${this.name}  ${this.sound}`);

    }
    introduce() {
        console.log(`as esu ${this.name} mano kailis${this.color} ir moku sakyti ${this.sound}`);



    }
}
module.exports = Hamster;
