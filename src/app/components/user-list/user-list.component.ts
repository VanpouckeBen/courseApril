import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  // users: User[] = [
  //   { id: 0, name: 'Jan' },
  //   { id: 1, name: 'Klaas' },
  //   { id: 2, name: 'Sophie' }
  // ];

  users$?: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsersRemote();
  }

}
