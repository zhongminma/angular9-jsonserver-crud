import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';

const headerOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable()
export class UserService {
  baseUrl: string = "http://localhost:3000/User";

  currentUser: User = {
    id: null,
    firstName: '',
    lastName: '',
    career: '',
    age: 0,
    nationality: ''
  }

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }
  createUser(u: User) :Observable<User> {
    return this.http.post<User>(this.baseUrl, u, headerOption);
  }
  updateUser(u: User) :Observable<User> {
    return this.http.put<User>(this.baseUrl+'/'+u.id, u, headerOption);
  }
  deleteUser(id: String): Observable<User> {
    return this.http.delete<User>(this.baseUrl + '/' + id, headerOption);
  }

}

