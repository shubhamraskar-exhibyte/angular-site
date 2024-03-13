import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    RouterOutlet,
    MatIconModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  isLogin: any;
  userInfo: any;
  name: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLogin = sessionStorage.getItem('loginData');
    if (this.isLogin) {
      this.userInfo = JSON.parse(this.isLogin);
      this.name = this.userInfo.username[0];
    } else {
      this.router.navigate(['/']);
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
