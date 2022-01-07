import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/user-response.interface';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  getAllImages(): Observable<UserResponse> {
    return this.http.get<UserResponse>('https://reqres.in/api/users');
    //from https://reqres.in/
  }

  getImageById(id: String): Observable<Data> {
    return this.http.get<Data>('https://reqres.in/api/users/' + id);
  }
}
