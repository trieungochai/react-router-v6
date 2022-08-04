// Class
class Employee {
  public name: string;
  private age: number;
  readonly male: boolean;

  constructor(name: string, age: number, male: boolean) {
    this.name = name;
    this.age = age;
    this.male = male;
  }
}

const Kai = new Employee("kai", 32, true);
console.log(Kai.name);
// console.log(Kai.age);
console.log(Kai.male);
