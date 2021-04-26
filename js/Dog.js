const Pet = require('./js/Pet');
class Dog extends Pet {
    constructor(name, color,) {
        super(name, color);
        this.sound = 'au au';
    }

}
module.exports = Dog;
