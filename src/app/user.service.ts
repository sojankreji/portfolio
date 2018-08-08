import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) {
   }

   getUserDetails():any{
    return [{
      name:'sandeep',
      id:'12'
    },{
      name:'sanoop',
      id:'15'
    }
    ,{
      name:'sandfssoop',
      id:'15'
    }
  ]
   }




   getUserDetailsFromServer(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
   }
}
