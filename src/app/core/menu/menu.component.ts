import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  alive = true;
  isAuthenticated = this.auth.isLoggedIn;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.auth$
      .pipe(
        takeWhile( () => this.alive )
      )
      .subscribe( (data: boolean) => {
        this.isAuthenticated = data;
      });
  }

  logout(): void {
    this.auth.logout();
  }

}