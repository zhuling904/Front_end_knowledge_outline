function Father() {
    this.name = 'father';
    this.hobby = ['read', 'write'];

}

Father.prototype.getName = function () {
    console.log('this.name', this.name);
}

function Son(age = 20) {
    this.age = age;
    this.getAge = () => {
        console.log('age', this.age);
    }
}

//关键代码
Son.prototype = new Father();

const son1 = new Son(100);
console.log("🚀 ~ son1:", son1);

son1.hobby.push('basketball');
console.log('son1.hobby', son1.hobby);

son1.getAge();
son1.getName();

const son2 = new Son(1);
son2.hobby.push('driver');

console.log('son1.hobby', son1.hobby);
console.log('son2.hobby', son2.hobby);

son2.getAge();
son2.getName();



