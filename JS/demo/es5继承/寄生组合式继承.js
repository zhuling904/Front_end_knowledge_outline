function Father(name) {
    this.name = name || "father";
    this.hobby = ["read", "write"];
  }
  
  Father.prototype.getName = function () {
    console.log("this.name", this.name);
  };
  
  function Son(name, age) {
    Father.call(this, name);
    this.age = age;
    this.getAge = () => {
      console.log("🚀 ~ this.age:", this.age);
    };
  }
  
  Son.prototype = Object.create(Father.prototype);
  Son.prototype.constructor = Son;
  console.log("🚀 ~ Son.prototype.constructor:", Son.prototype.constructor)
  
  const son1 = new Son("jack", 100);
  
  console.log("🚀 ~ son1:", son1);
  
  son1.hobby.push("basketball");
  console.log("son1.hobby", son1.hobby);
  
  son1.getAge();
  son1.getName();
  
  const son2 = new Son("june", 99);
  son2.hobby.push("driver");
  
  console.log("son1.hobby", son1.hobby);
  console.log("son2.hobby", son2.hobby);
  
  son2.getAge();
  son2.getName();
  