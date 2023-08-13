import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/app-service/user.service';

@Component({
  selector: 'logged-app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LoggedLayoutComponent implements OnInit {

  constructor(
    private userService:UserService,
  ) { }

  ngOnInit(): void {
  }

  salir(): void{
    this.userService.deleteUserData()
    location.reload();
  }

}
