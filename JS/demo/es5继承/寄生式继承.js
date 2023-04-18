function Father(son) {
    let clone = Object.create(son);

    clone.name = 'father';

    clone.getName = function () {
        console.log("🚀 ~ name:", this.name)
    }

    return clone;
}

let son = {
    age: 20,
    getAge: function () {
        console.log("🚀 ~ son.age:", this.age)
    }
}

let son1 = Father(son);
let son2 = Father(son);

son1.getAge();
son2.getName();
