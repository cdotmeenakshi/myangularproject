import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { DatastoreService } from '../datastore.service';
import { Userdetail } from '../userdetail';
import { ActivatedRoute,Router,ActivatedRouteSnapshot } from '@angular/router';


@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent {
  userForm: FormGroup= new FormGroup({});
  data: Userdetail={id:0,firstname:'',lastname:'',password:''}
   
  
  itemId: number | null = null;


  
  constructor(

    private route:  ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: DatastoreService
  ) {
   
    
    this.userForm = this.formBuilder.group({
    
    
      firstname:new FormControl(''),
          lastname:(''), 
          password: (''), 
  
          
     
        });

    

  }
  ngOnInit(): void {
  
    const itemIdParam = this.route.snapshot.paramMap.get('id');
    
    
    if (itemIdParam !== null) {
      this.itemId = +itemIdParam;
    } else {
      console.error('Item ID not provided');
    }

   this.data= Object.assign({},   this.userService.getDataById(this.itemId as number));
   
   
   
   this.userForm = this.formBuilder.group({
    
    id:new FormControl(this.data['id']),
    firstname:new FormControl(this.data['firstname']),
        lastname:(this.data['lastname']), 
        password: (this.data['password']), 

        
   
      });

   
   
}

  updateUser( ): void {
    const userdata=this.userForm.value;
    console.log(userdata);

   this.userService.updateData(userdata);
   console.log('hai',this.userService.updateData(userdata));



    this.router.navigate(['/admin']); 
  }

  }
  


  