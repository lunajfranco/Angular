import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-heroe-home',
  templateUrl: './heroe-home.component.html',
  styles: [`
    .container{
      margin: 15px;
    }
  `
  ]
})
export class HeroeHomeComponent implements OnInit {
  public userName: string | undefined = ""; 
  constructor(private route: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.userName = this.authService.auth.usuario;
  }

  login() {
    this.route.navigate(['./auth']);
  }
}
