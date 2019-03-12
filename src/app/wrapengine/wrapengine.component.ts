import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapengine',
  templateUrl: './wrapengine.component.html',
  styleUrls: ['./wrapengine.component.less']
})
export class WrapengineComponent implements OnInit {
  hideLoading = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => { this.hideLoading = true; }, 500);
  }
}
