interface Person {
  name: string;
  age: number;
  speak(lang: string): void;
  spend(amount: number): number;
}

const kai: Person = {
  name: "Kai",
  age: 32,
  speak(text: string): void {
    console.log(text);
  },
  spend(amt: number): number {
    return amt;
  },
};

const helloPerson = (onePerson: Person) =>
  console.log(`hello ${onePerson.name}`);

helloPerson(kai);
