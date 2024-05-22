// Cricketer class definition with TypeScript type annotations
class Cricketer {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method to display cricketer's details
  displayInfo(): void {
    console.log(`Cricketer Name: ${this.name}, Age: ${this.age}`);
  }
}

// Creating an instance of Cricketer
const Mashrafee = new Cricketer("Mashrafee", 32);

// Calling the method to display Mashrafee's details
Mashrafee.displayInfo();
