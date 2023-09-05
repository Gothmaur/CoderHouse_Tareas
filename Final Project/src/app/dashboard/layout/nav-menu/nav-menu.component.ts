import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/Services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  constructor(private router: Router, private authService: AuthService){}

  LogOut():void{
    this.router.navigate(['auth','login'],{});
    //localStorage.removeItem('token');
    this.authService.logOut();

  }

  goToUsers():void{
    this.router.navigate(['dashboard','users'],{
      //relativeTo: this.activatedRoute,
    });
  }

  goToProducts():void{
    this.router.navigate(['dashboard','products'],{
      //relativeTo: this.activatedRoute,
    });
  }

  goToHome():void{
    this.router.navigate(['dashboard','home'],{
      //relativeTo: this.activatedRoute,
    });
  }

}


