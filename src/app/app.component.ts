import { Component, ElementRef, IterableDiffers, OnInit, Renderer2, ViewChild } from '@angular/core';
import { __classPrivateFieldSet } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'menu-navigation';
 
  ngOnInit() {}

  activeLink(e:any) {
    let list = document.querySelectorAll('.list');
    console.log('list', list ) 
    list.forEach((item)=>
      item.classList.remove('active'));
  }

}
