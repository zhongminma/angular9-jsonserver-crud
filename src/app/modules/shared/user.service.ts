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
}

