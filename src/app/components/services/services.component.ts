import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { LoggingService } from 'src/app/services/logging.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  // users$: Observable<User[]> | undefined;
  users$ ?: Observable<User[]>;
  constructor(private logging: LoggingService, private userService: UserService) { }

  ngOnInit(): void {
    this.logging.information('Component initialized');
    const users = this.userService.getUsers();
    this.logging.information(`users: ${JSON.stringify(users)}`);

    this.users$ = this.userService.getUSersRemote();
  }
}
