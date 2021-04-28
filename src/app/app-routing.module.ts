import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeartComponent } from './components/heart/heart.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServicesComponent } from './components/services/services.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  {
    path: 'user', component: UserListComponent, children: [
      { path: ':id', component: UserDetailComponent }
    ]
  },
  { path: 'service', component: ServicesComponent },
  { path: '**', component: NotFoundComponent } // fall back route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
