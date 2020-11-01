import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './../../../services/api.service';

import { User } from './../../../models/user.model';

@Injectable()
export class AdminApiService extends ApiService {
  users: User[];
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.apiUrl = 'https://reqres.in/api';
  }

  ListUsers(
    page: number = 1
  ): Observable<{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
  }> {
    return this.httpClient.get<{
      page: number;
      per_page: number;
      total: number;
      total_pages: number;
      data: User[];
    }>(`${this.apiUrl}/users?page=${page}`);
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}/users`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/users/${id}`);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/users/${user.id}`, user);
  }
}
