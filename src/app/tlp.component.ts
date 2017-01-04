import { Component, Input  } from '@angular/core';
/*
  Generated class for the Lending page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-heder',
  template : `<ion-header>
  <ion-navbar>
    <button ion-button icon-only menuToggle>
      <ion-icon name="menu"></ion-icon> 
    </button>
    <ion-title>
      {{title}}
    </ion-title>
  </ion-navbar>
</ion-header>`
})
export class PageHeder {
  @Input() title : string ='sachin';
  constructor( ) {
  this.title='abc';
  }
  ngOnInit() {
        console.log('This if the value for title- : ' + this.title);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageHeder '+this.title+';');
  }

}
