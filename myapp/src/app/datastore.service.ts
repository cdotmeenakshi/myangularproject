import { Injectable } from '@angular/core';
import { Userdetail } from './userdetail';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  userdetaillist:Userdetail[]=[];

  constructor() { }
  setUser(user:Userdetail){
    var arrLength=this.userdetaillist.length;
    if(arrLength==0){
      user.id=1;
    }
    else{
      user.id=this.userdetaillist[arrLength-1].id+1;
    }
    
    this.userdetaillist.push(user)
    console.log(this.userdetaillist)

  }
  getAll(){
    return this.userdetaillist;
  }
  removeUser(index:number){
    this.userdetaillist.splice(index-1,1)
  }
}
