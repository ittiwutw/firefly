import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.page.html',
  styleUrls: ['./survey-list.page.scss'],
})
export class SurveyListPage implements OnInit {
  surveys = [];

  constructor(
    private storage: Storage,
    private router: Router,
    private restApi: RestService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getSurveys();
  }

  getSurveys() {
    this.storage.get('surveys').then(val => {
      this.surveys = val;
      console.log(this.surveys);
    });
  }

  onClickDetail(survey, index) {
    survey.index = index;
    this.router.navigate(['/survey-detail', { surveyDetail: JSON.stringify(survey), from: 'local' }]);
  }

  async onClickSendData() {
    const that = this;
    const alertBox = await this.alertController.create({
      header: 'ยืนยันการส่งข้อมูลหรือไม่',
      message: 'หลังจากส่งข้อมูล ข้อมูลในโทรศัพท์ของท่านจะหายไป',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ยืนยัน',
          handler: () => {
            that.restApi.sendData(this.surveys).then(res => {
              alert('ส่งข้อมูลเสร็จสิ้น');
              this.storage.remove('surveys').then(val => {
                this.getSurveys();
              });
            }).catch(err => {
              alert('ส่งข้อมูลไม่สำเร็จ');
            });
          }
        }
      ]
    });

    await alertBox.present();
  }

  onClickAdd() {
    this.router.navigate(['/add-survey']);
  }

}
