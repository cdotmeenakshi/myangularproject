import { Injectable } from '@angular/core';
import { Userdetail } from './userdetail';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  userdetaillist:Userdetail[]=[];
  private data: Userdetail[] = [
    { id: 1, firstname: 'John Doe', lastname: 'gh',password:'sssffh' },
 
  ];
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

  getAllData(): Userdetail[] {
    return this.data;
  }
  
  getDataById(id: number): Userdetail | undefined {
    return this.userdetaillist.find(item => item.id === id);
console.log(this.userdetaillist)
  }

  updateData(updatedData: Userdetail): void {


    const index = this.userdetaillist.findIndex(item => item.id === updatedData.id);
     if (index !== -1) {
      this.userdetaillist [index] = updatedData;
      console.log('index',index);
      console.log('welcome',this.userdetaillist[index])
     // this.userdetaillist.push(updatedData)
  
   
      
    }

     

    
    

   
  }

  login(credentials: Userdetail): boolean {
    const user = this.userdetaillist.find(u => u.firstname === credentials.firstname && u.password === credentials.password);
    if (user) {
      // Perform any additional actions upon successful login
      return true;
    }
    return false;
    console.log(user)
  }


}
