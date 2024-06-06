import { employees } from './emplyees.js';

for (let i = 0; i < employees.length; i++) {
    const data = employees[i];
    console.log(data.firstName, data.lastName);

}