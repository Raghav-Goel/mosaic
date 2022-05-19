import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder,private userService: UserService,private router: Router) { }
  emailId:string="";
  password:string="";
  error!:string;
  user!:User;
  ngOnInit(): void {
  }
  submit(){
    this.error="";
    this.user=new User();
    this.userService.getCustomer(this.emailId).subscribe(
      (success)=>{
        this.user=success;
        if(this.user.password==this.password){
          sessionStorage.setItem('flag','true');
          this.router.navigate(['']).then(()=>{
            window.location.reload();
          })
        }
        else{
          this.error="You have entered the wrong Userid or Password"
        }
      },
      (error)=>{
        this.error="You have entered the wrong Userid or Password"
      }
    )
  }
}
