import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiService {
  currentUser: User;

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.apiUrl = 'https://reqres.in/api';
  }
}
