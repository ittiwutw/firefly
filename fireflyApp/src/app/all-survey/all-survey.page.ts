import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-all-survey',
  templateUrl: './all-survey.page.html',
  styleUrls: ['./all-survey.page.scss'],
})
export class AllSurveyPage implements OnInit {

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
    this.restApi.getAllData().then(res => {
      let result: any;
      result = res;
      this.surveys = result.data;
    });
  }

  onClickDetail(survey, index) {
    survey.index = index;
    this.router.navigate(['/survey-detail', { surveyDetail: JSON.stringify(survey), from: 'serv' }]);
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
