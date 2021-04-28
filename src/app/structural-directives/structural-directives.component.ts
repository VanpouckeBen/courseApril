import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  isVisible = true;
  fruit = 'random';
  users: User[] = [
    { id: 0, name: 'Jan' },
    { id: 1, name: 'Klaas' },
    { id: 2, name: 'Sophie' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleIsVisbile(): void {
    this.isVisible = !this.isVisible;
  }

  trackByItems(index: number, person: User): number {
    return person.id;
  }

  getPersons(): void{
    this.users = [
      { id: 0, name: 'Jan' },
      { id: 1, name: 'Klaas' },
      { id: 2, name: 'Sophie' },
      { id: 3, name: 'Bennie' }
    ];
  }
}
