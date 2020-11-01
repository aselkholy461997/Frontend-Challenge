import { AuthModule } from './../auth.module';
import { User } from './../../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './../../../services/api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthApiService extends ApiService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.apiUrl = 'https://reqres.in/api';
  }

  register(user: User): Observable<{ id: string; token: string }> {
    return this.httpClient.post<{ id: string; token: string }>(
      `${this.apiUrl}/register`,
      user
    );
  }

  login(email: string, password: string): Observable<{ token: string }> {
    return this.httpClient.post<{ token: string }>(
      `${this.apiUrl}/login`,
      new User(email, password)
    );
  }
}
