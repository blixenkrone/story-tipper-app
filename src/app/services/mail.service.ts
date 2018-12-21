import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MailService {

  constructor(private http: HttpClient) { }

  private getToken = () => {
    return this.http.get(`${environment.microApiUrl}`)
      .pipe(catchError(err => of(err)))
  }

  private handleErrors<T>(error: T): T {
    console.log(error);
    return error;
  }

}
