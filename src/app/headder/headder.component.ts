import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.less']
})
export class HeadderComponent implements OnInit {
  showMenu = false;
  constructor() { }

  ngOnInit() {
  }

  openMenu() {
    this.showMenu = !this.showMenu;
    // element.setAttribute("style", "color:red; border: 1px solid blue;");
  }
}
