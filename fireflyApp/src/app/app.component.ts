import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'รายการที่เก็บข้อมูล',
      url: '/survey-list',
      icon: 'list'
    },
    {
      title: 'เก็บข้อมูล',
      url: '/add-survey',
      icon: 'add'
    },
    // {
    //   title: 'ข้อมูลในระบบ',
    //   url: '/all-survey',
    //   icon: 'list'
    // },
    // {
    //   title: 'แผนที่การสำรวจ',
    //   url: '/map-list',
    //   icon: 'pin'
    // },
    {
      title: 'ข้อมูลส่วนตัว',
      url: '/profile',
      icon: 'person'
    }
  ];

  profile: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage
  ) {
    this.initializeApp();
    // this.storage.remove('profile')
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.getProfile();
    });
  }

  ngOnInit() {

  }

  getProfile() {
    this.storage.get('profile').then(val => {
      if (val) {
        this.profile = val;
      }
    });
  }
}
