import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './interface/Person';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPerson(): Person[] {
    return this.appService.getPerson();
  }

  @Post()
  postPerson(@Body() persona:Person):Person[]{
    return this.appService.addPerson(persona);
  }

  @Delete()
  deletePerson(): Person[] {
    return this.appService.deletePerson();
  }
}
