import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { UserService } from '../services/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  message: string;
  messagePasswordError: string;
  showAlert: boolean;
  showAlertPasswordError: boolean;

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, ,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(7)]],
      retypePassword: ['', [Validators.required,Validators.minLength(7)]]
      
    }),
    this.showAlert = false;
    this.showAlertPasswordError = false;
    this.registerForm.get('email').valueChanges.subscribe(value => { 
    this.checkEmailAlreadyRegister(value) });
    this.message = " Email already registered ";
    this.messagePasswordError = " The passwords are not the same ";
  }

  get f() { return this.registerForm.controls; }

  checkPasswords(){
   
    if(this.f.password.value !== this.f.retypePassword.value){
      this.showAlertPasswordError = true;
      return false;
    }
      return true;
  }

  onSubmit() {
  
    if (this.checkPasswords()) {
      console.log("Form Values: " + this.f.name.value + " " + this.f.lastName.value + " " +  this.f.password.value);
      this.registerService.register(this.registerForm.value)
      .subscribe((response:any) => {
        console.log(response.response);
        this.router.navigate(['login']);
      }), error => {
        console.log(error);
      }
    }else{
       this.showAlertPasswordError = true;
    }
}

   checkEmailAlreadyRegister(email:string){
    this.userService.checkUserAlreadyRegistered(email)
    .subscribe((response:any) => {
      console.log(response);
      if(response === true){
        this.showAlert = true;
        }else{
        this.showAlert = false;
      }
    }), error => {
      console.log(error);
    }
   }
}

//.subscribe((response:any) => {console.log(response)})
