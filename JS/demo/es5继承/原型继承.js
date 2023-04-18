const father = {
    name: 'father',
    hobby: ['read','write'],
    getName: () => {
        console.log("🚀 ~ father.name:", father.name)
    }
}

const son1 = Object.create(father);
son1.age = 100;
son1.getAge = function() {
    console.log("🚀 ~ age:", this.name, this.age, this.hobby)
}
son1.hobby.push('A')

const son2 = Object.create(father);
son2.age = 99;
son2.hobby.push('B')
son2.getAge = function () {
    console.log("🚀 ~ age:", this.name, this.age, this.hobby)
}


son2.getAge()
son1.getAge()