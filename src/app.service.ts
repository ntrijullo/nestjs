import { Injectable } from '@nestjs/common';
import { Person } from './interface/Person';

@Injectable()
export class AppService {

  person: Person []= [
    {
      name: 'enzo',
      email: 'enzo@enzo.cl',
      age: 30
    },
    {
      name: 'nelson',
      email: 'nelson@nelson.cl',
      age: 30
    },
  ];

  getPerson(): Person[] {
    return this.person;
  }

  deletePerson(): Person[]{
    this.person.splice(-1,1);
    return this.person;
  }

  addPerson(persona: Person):Person[]{
    this.person.push(persona);
    return this.person;
  }
}

