import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [
    { id: 0, name: 'Jan' },
    { id: 1, name: 'Klaas' },
    { id: 2, name: 'Sophie' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
