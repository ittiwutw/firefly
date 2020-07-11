import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.page.html',
  styleUrls: ['./map-list.page.scss'],
})
export class MapListPage implements OnInit {
  lat: number;
  lng: number;
  height = 300;
  zoom = 10;

  isLoading = false;

  fireflyList = [];

  firflyType1 = [];
  firflyType2 = [];
  firflyType3 = [];
  firflyType4 = [];
  firflyType5 = [];
  firflyType6 = [];
  firflyType7 = [];
  firflyType8 = [];
  firflyType9 = [];
  firflyType10 = [];

  constructor(
    public platform: Platform,
    private geolocation: Geolocation,
    private restApi: RestService,
    public loadingController: LoadingController
  ) {
    this.height = platform.height() - 56;
    this.getSurveys();
  }

  ngOnInit() {
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;

      // this.loading.dismiss();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getSurveys() {
    this.present();
    this.restApi.getAllData().then(res => {
      let result: any;
      result = res;
      const surveys = result.data;


      surveys.forEach(survey => {

        if (survey.coordinates) {
          const latLngStr = survey.coordinates;
          const splitLlatLng = latLngStr.split(',');

          const latlng = {
            lat: +(splitLlatLng[0].split(' ').join('')),
            lng: +(splitLlatLng[1].split(' ').join(''))
          };

          this.fireflyList.push(latlng);

          if (survey.type === 'หิ่งห้อยน้ำกร่อย') {
            this.firflyType1.push(latlng);
          } else if (survey.type === 'หิ่งห้อยน้ำกร่อยวาลิดะ(Pteroptyx valida)') {
            this.firflyType2.push(latlng);
          } else if (survey.type === 'หิ่งห้อยน้ำกร่อยมาแลคคี่(Pteroptyx malaccae)') {
            this.firflyType3.push(latlng);
            console.log(this.firflyType3);
          } else if (survey.type === 'ตัวหนอนหิ่งห้อยน้ำกร่อย') {
            this.firflyType4.push(latlng);
            console.log(this.firflyType4);
          } else if (survey.type === 'หิ่งห้อยบก/น้ำจืด') {
            this.firflyType5.push(latlng);
          } else if (survey.type === 'หิ่งห้อยน้ำจืดอะควาติลิส(S. aquatilis)') {
            this.firflyType6.push(latlng);
          } else if (survey.type === 'หิ่งห้อยบกไพโรซีเลีย(Pyrocoelia)') {
            this.firflyType7.push(latlng);
          } else if (survey.type === 'หนอนหิ่งห้อยบกไพโรซีเลีย') {
            this.firflyType8.push(latlng);
          } else if (survey.type === 'หนอนหิ่งห้อยน้ำจืดอะควาติลิส') {
            this.firflyType9.push(latlng);
          } else if (survey.type === 'อื่นๆ') {
            this.firflyType10.push(latlng);
          }

        }
      });

      this.loadMap();
      this.dismiss();
    });
  }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      // duration: 5000,
      message: 'กำลังโหลดข้อมูล',
      // showBackdrop: false,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  markerClick(event, item) {
    console.log(item);
    // alert()
  }

}
