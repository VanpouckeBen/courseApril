import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {
  isUShow = true;
  currentClasses = { savable: true };
  users: User[] = [
    { id: 0, name: 'Jan' },
    { id: 1, name: 'Klaas' },
    { id: 2, name: 'Sophie' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  toggle(): void {
    this.isUShow = !this.isUShow;
  }

  logUpdateName(name: string): void {
    console.log('name changed', name);
  }
}
