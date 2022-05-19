import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!:FormGroup;
  errorMsg!:string;
  constructor(private formBuilder: FormBuilder,private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name:["",[Validators.required,Validators.pattern("([A-Z][a-z]*)+")]],
      gender:["",[Validators.required]],
      dateOfBirth:["",[Validators.required]],
      phoneNumber:["",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      emailId:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(8)]],
      address:["",Validators.required]
    })
  }
  register(){
    this.errorMsg="";
    this.userService.addCustomer(this.registrationForm.value).subscribe(
      (success) => {
        sessionStorage.setItem("flag","true");
        this.router.navigate([""]).then(()=>{window.location.reload()});
      },
      (error) => {this.errorMsg=error.error.message}
    );

  }

}
