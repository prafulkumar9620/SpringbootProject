import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='';
  password='';
  result="";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  validate(){
    console.log(this.username+" "+this.password);
    if(this.username=="admin" && this.password=="1234")
         this.router.navigateByUrl('/home');
    else{
    this.router.navigateByUrl('/login');
    this.result="Invalid Login id or password...";
    }
  }

}

