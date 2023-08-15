import { Component } from '@angular/core';
import { Userdetail } from '../userdetail';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  allUserList:Userdetail[]=[]
constructor(private datastore:DatastoreService){

}
ngOnInit():void{
  this.allUserList=this.datastore.getAll();
}
deletUser(userid:number){
  this.datastore.removeUser(userid);

}
}
