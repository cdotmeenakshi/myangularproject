import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Userdetail } from '../userdetail';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  showform:Boolean=true;
  
  
 

  registrationForm:FormGroup= new FormGroup({});
  constructor(private fb: FormBuilder,  private route: ActivatedRoute, private datastore:DatastoreService) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required]
    });
  

  }


  submitForm(){

    
    var  newUserDetail:Userdetail=this.registrationForm.value;
    //console.log(newUserDetail)
    this.datastore.setUser(newUserDetail);
    this.showform=false;
  }

}
