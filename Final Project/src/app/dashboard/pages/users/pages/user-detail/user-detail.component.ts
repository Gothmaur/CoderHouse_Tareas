import { Component } from '@angular/core';
import { User } from '../../models/Users';
import { NotifyService } from 'src/app/core/services/notify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  
  public user: User | null = null;
  public userId?: number;

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private notification: NotifyService, private userService:UserService){
    if(!Number(this.activatedRoute.snapshot.params['id'])){
      this.router.navigate(['dashboard','users']);
      this.notification.showError(`${this.activatedRoute.snapshot.params['id']} no es un ID válido`);
    }else{
      this.userId = Number(this.activatedRoute.snapshot.params['id']);
      this.loadUser();
    }
  }

  loadUser():void{
    if(this.userId){
      this.userService.getUsersById(this.userId).subscribe({
        next:(user) => console.log(user),
      });
    }
  }

}
