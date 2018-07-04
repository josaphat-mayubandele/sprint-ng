import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  username;
  private storageSub = new Subject<boolean>();

  // tslint:disable-next-line:member-ordering
  static updateUserStatus: Subject<boolean> = new Subject();

  isLoggedIn$: Observable<boolean>;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.auth.isLoggedIn;
    this.delay(0.1).then(any => {
      // your task after delay.
      this.username = localStorage.getItem('user_email');
    });
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), 1000));
  }
}
