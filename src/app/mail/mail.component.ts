import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../services/user.service';
import { catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { IUsers } from '../models/users.model';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MailComponent implements OnInit {
  private users$: Observable<IUsers>;

  constructor(private usrSrv: UserService) { }

  ngOnInit() {
    this.users$ = this.usrSrv.getUsers({ page: 0, hits: 9, feed: 'normal' })
      .pipe(catchError(err => of(err)), tap(res => console.log(res)))
  }

  sendMail(event: Event) {
    console.log(event)
  }

}
