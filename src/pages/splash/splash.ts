import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(
    public navCtrl: NavController, 
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public splashScreen: SplashScreen) {
  }

  inViewDidEnter(){
    this.splashScreen.hide();

    setTimeout(()=>{
      this.viewCtrl.dismiss();
    },4000);
  }

}
