import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  id$: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);

    this.id$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id'))
    );
  }

  goToHome(): void{
    this.router.navigate(['']);
  }

}
