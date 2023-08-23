import { Component } from '@angular/core';
import { Userdetail } from '../userdetail';
import { DatastoreService } from '../datastore.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  allUserList:Userdetail[]=[]
constructor(private datastore:DatastoreService,private router: Router){
  this.allUserList=this.datastore.getAll();

}
ngOnInit():void{
 // this.allUserList=this.datastore.getAll();
}
deletUser(userid:number){
  this.datastore.removeUser(userid);

}
editUser(selectedUser: Userdetail): void {
  this.router.navigate(['/edit-user', selectedUser.id]);
}
}
