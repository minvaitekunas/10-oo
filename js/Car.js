class Car {
    constructor(name) {
    
        this.name = name;
        this.isEngineOn = false;
        this.color = color;

    }
    turnOn() {
        this.isEngineOn = true;

    }
    turnOff() {
        this.isEngineOff = false;

    }
    statusReport() {
        console.log(`${this.name} : engine is on ${this.isEngineOn} ? ture : false`);

    }
    

}

module.exports = Car;
