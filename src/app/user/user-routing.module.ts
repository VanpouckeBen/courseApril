import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyNumbersGuard } from '../core/only-numbers.guard';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    canActivateChild: [OnlyNumbersGuard],
    children: [
      { path: ':id', component: UserDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
