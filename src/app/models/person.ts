import { Office } from './office';

export class Person {
  id: Number;
  firstName: String;
  lastName: String;
  phoneNumber: String;
  birthDate: Date;
  hireDate: Date;
  officeLocation?: Office;
}
