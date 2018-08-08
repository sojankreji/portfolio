import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  public name:any;
  public ar:any=[];
  constructor(public user:UserService) { }

  ngOnInit() {
    this.name="unni"
    this.ar=this.user.getUserDetails()
  }

}
