import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatastoreService } from '../datastore.service';
import { Userdetail } from '../userdetail';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: Userdetail = {id:0, firstname: '',lastname:'', password: '' };

  constructor(private fb:FormBuilder,private loginservice:DatastoreService){}
  
  loginForm:FormGroup= new FormGroup({});
  
  ngOnInit() {
    this.  loginForm = this.fb.group({
      username: ['', Validators.required],
    
      password: ['', Validators.required]
    });
  

  }


  login(){
    const userdata=this.loginForm.value
    if (this.loginservice.login(this.credentials)) {
      // Redirect or perform actions upon successful login
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
    console.log(this.credentials)
  }
  }


