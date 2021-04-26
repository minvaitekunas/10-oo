class Vista {
    constructor(name, color, sound, wingsCount, canFly) {

    this.name = name;
    this.sound = 'cyp';
    this.color = color;
    this.wingsCount = 2;
    this.canFly = false;

}


   voice() {
        console.log(`${this.name}  ${this.sound}`);

    }
    introduce() {
        console.log(`as esu ${this.name} mano kailis${this.color} ir moku sakyti ${this.sound}`);
}

flyAway() {
    if (this.canFly) {
        console.log(`${this.name} : ${this.sound}`);
    } else {
        console.log(`$this.name) : cannot fly away`);
    }
}
}


module.exports = Vista;