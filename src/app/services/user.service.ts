import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers(): User[] {
    return [
      { id: 0, name: 'Jan' },
      { id: 1, name: 'Klaas' },
      { id: 2, name: 'Sophie' }
    ];
  }

  getUsersRemote(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getUserRemote(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  getPictures(): string[] {
    return [
      'https://randomuser.me/api/portraits/thumb/women/70.jpg',
      'https://randomuser.me/api/portraits/thumb/men/76.jpg',
      'https://randomuser.me/api/portraits/thumb/women/95.jpg',
      'https://randomuser.me/api/portraits/thumb/women/32.jpg',
      'https://randomuser.me/api/portraits/thumb/women/90.jpg',
      'https://randomuser.me/api/portraits/thumb/women/72.jpg',
      'https://randomuser.me/api/portraits/thumb/men/66.jpg',
      'https://randomuser.me/api/portraits/thumb/men/91.jpg',
      'https://randomuser.me/api/portraits/thumb/women/25.jpg',
      'https://randomuser.me/api/portraits/thumb/women/55.jpg',
      'https://randomuser.me/api/portraits/thumb/men/48.jpg',
    ];
  }

}
