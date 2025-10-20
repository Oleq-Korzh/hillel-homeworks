import "@css/test.css";

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getUserInfo() {
    console.log(this.name, this.age);
  }
}

const user = new User("Oleg", 25);

user.getUserInfo();
