// console.log('Hello TypeScript')

let firstName: string = "Ainis";
let age: number = 25;
let good: boolean = true;

// firstName = 4 // not valid

let fruits: string[] = ["banana", "apple"];

debug(`
    First Name: ${firstName} 
    Your Age: ${age}  
    You have a ${fruits}
`);

enum taxForm {
  standard = "1040",
  childCredit = "1065",
  SCorp = "1120s",
  CCorp = "1120",
}

debug(`
    you need form ${taxForm.SCorp}
`);

function getFruit(index: number): string {
  return fruits[index];
}

debug(`you chose a ${getFruit(0)}`);

function debug(message: any): void {
  // comment out to stop all logging where console.log is replaced with 'debug'
  // console.log(message);
  // no return here
}
debug("no return");

interface teacher {
  name: string,
  years: number,
  subject: string[],
  age: number
}

let damian: teacher = {
  name: 'damian',
  years: 20,
  subject: ['JavaScript', 'TypeScript'],
  age: 49
}

console.log(damian)
