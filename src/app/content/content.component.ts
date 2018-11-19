import { Component, OnInit } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {
  showPopup = false;
  showFloatingPopup = false;
  imageUrl: String;
  show1 = false;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  show6 = false;
  showf1 = false;
  showf2 = false;
  showf3 = false;
  showf4 = false;
  constructor() {
  }

  clearPopup() {
    this.showPopup = false;
    this.showFloatingPopup = false;
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.showf1 = false;
    this.showf2 = false;
    this.showf3 = false;
    this.showf4 = false;
  }
  testfunction() {

    this.showPopup = !this.showPopup;
  }
  ngOnInit() {
  }
  popupFn(item) {
    if (item === 1) {
      this.clearPopup();
      this.showPopup = true;
      this.show1 = true;
    }
    if (item === 2) {
      this.clearPopup();
      this.showPopup = true;
      this.show2 = true;
    }
    if (item === 3) {
      this.clearPopup();
      this.showPopup = true;
      this.show3 = true;
    }
    if (item === 4) {
      this.clearPopup();
      this.showPopup = true;
      this.show4 = true;
    }
    if (item === 5) {
      this.clearPopup();
      this.showPopup = true;
      this.show5 = true;
    }
    if (item === 6) {
      this.clearPopup();
      this.showPopup = true;
      this.show6 = true;
    }
    if (item === 7) {
      this.clearPopup();
      this.showPopup = true;
      this.show1 = true;
    }
    if (item === 11) {
      this.clearPopup();
      this.showf1 = true;
      this.showFloatingPopup = true;
    }
    if (item === 12) {
      this.clearPopup();
      this.showf2 = true;
      this.showFloatingPopup = true;
    }
    if (item === 13) {
      this.clearPopup();
      this.showf3 = true;
      this.showFloatingPopup = true;
    }
    if (item === 14) {
      this.clearPopup();
      this.showf4 = true;
      this.showFloatingPopup = true;
    }
  }
}
