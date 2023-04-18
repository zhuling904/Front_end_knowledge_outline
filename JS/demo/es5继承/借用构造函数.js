function Father(name) {
    this.name = name || 'father';
    this.hobby = ['read', 'write'];
    this.getName = function () {
        console.log('this.name', this.name);
    }
}


function Son(name, age) {
    Father.call(this, name);
    this.age = age;
    this.getAge = () => {
        console.log("🚀 ~ this.age:", this.age)
    }
}

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



