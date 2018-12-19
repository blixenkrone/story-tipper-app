import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**
 * @property {token}user_token is already fetched in API
 */
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * @param params is page hits feed
   */
  getUsers(params: {}) {
    return this.http.get(`${environment.storyApiUrl}/users`, { params })
  }

}
