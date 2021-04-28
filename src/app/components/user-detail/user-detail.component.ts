import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  // id$?: Observable<string | null>;
  user$?: Observable<User>;
  picture?: string;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);

    // this.id$ = this.route.paramMap.pipe(
    //   map((params: ParamMap) => params.get('id'))
    // );

    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = Number(params.get('id'));
        this.picture = this.userService.getPictures()[id - 1];
        return this.userService.getUserRemote(id);
      }
      ));


  }

  goToHome(): void {
    this.router.navigate(['']);
  }

}
