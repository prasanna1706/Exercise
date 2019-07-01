/* eslint-disable no-alert */
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compare(p) {
    if (this.age > p.age) {
      alert(`${this.user1}is older than${this.user2}`);
    } else {
      alert(`${this.user2}is older than${this.user1}`);
    }
  }
}
// eslint-disable-next-line quotes
const user1 = new User('john', 23);
const user2 = new User('mary', 22);
user1.compare(user2);
