class Cat {
constructor(name,color, sound) {

    this.name = name;
    this.color = color;
    this.sound = sound;
}
    voice() {
        console.log(`${this.name}  ${this.sound}`);

}


introduce() {
    console.log(`as esu ${this.name} mano kailis${this.color} ir moku sakyti ${this.sound}`);

}

}



module.exports = Cat;
