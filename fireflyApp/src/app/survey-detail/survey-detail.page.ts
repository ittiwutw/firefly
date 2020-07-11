import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
// declare var google;

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.page.html',
  styleUrls: ['./survey-detail.page.scss'],
})
export class SurveyDetailPage implements OnInit {

  // @ViewChild('map', { static: false }) mapContainer: ElementRef;
  // map: any;

  lat: number;
  lng: number;
  height = 300;
  zoom = 15;

  surveyData = {
    date: '',
    province: '',
    name: '',
    phone: '',
    email: '',
    coordinates: '',
    type: '',
    amount: '',
    remark: '',
    index: 0,
    img_url: '',
    imgView: '',
    details: '',
    imgUrl: '',
    firefly_id: 0,
    firefly_name: '',
    light: '',
    light_id: 0,
    light_name: '',
    position_id: '0',
    position_name: '',
    tree_id: 0,
    fireflycount: '',
    l_lat: '',
    l_long: '',
    tumbon_id: 0,
    tumbon_name: '',
    tree_name: '',
    time: '',
    firefly_type: ''
  };

  isShowDelete = false;
  isShowMap = false;

  constructor(
    private storage: Storage,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    this.activatedRoute.params.subscribe(params => {
      this.surveyData = JSON.parse(params.surveyDetail);
      const from = params.from;

      if (from === 'local') {
        this.isShowDelete = true;
      }

      console.log(this.surveyData);

      if (this.surveyData.coordinates) {
        const latLngStr = this.surveyData.coordinates;
        const splitLlatLng = latLngStr.split(',');
        this.lat = +(splitLlatLng[0].split(' ').join(''));
        this.lng = +(splitLlatLng[1].split(' ').join(''));

        this.isShowMap = true;
        // setTimeout(() => {
        //   // this.loadMap();
        // }, 500);
      }

    });
  }

  // loadMap() {


  //   console.log('load map');
  //   const that = this;

  //   const latLngStr = this.surveyData.coordinates;

  //   const splitLlatLng = latLngStr.split(',');
  //   const lat = +(splitLlatLng[0].split(' ').join(''));
  //   const lng = +(splitLlatLng[1].split(' ').join(''));
  //   // หาที่อยู่ ปัจจุบัน
  //   // this.geolocation.getCurrentPosition().then((resp) => {
  //   // set lat lng
  //   const latLng = new google.maps.LatLng(lat, lng);
  //   const mapOptions = {
  //     center: latLng,
  //     zoom: 15,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };

  //   this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  //   this.addMarkersToMap(lat, lng);
  //   // }).catch((error) => {
  //   //   console.log('Error getting location', error);
  //   // });

  //   // tslint:disable-next-line:only-arrow-functions


  // }

  // addMarkersToMap(lat, lng) {
  //   console.log('add marker');
  //   // this.removeMarker();
  //   const position = { lat, lng };
  //   const marker = new google.maps.Marker({
  //     position,
  //     map: this.map
  //   });
  //   marker.setMap(this.map);
  // }

  ngOnInit() {
  }

  onClickDelete() {
    this.storage.get('surveys').then(val => {
      let surveysData = [];
      surveysData = val;
      surveysData.splice(this.surveyData.index, 1);

      this.storage.remove('surveys').then(removed => {
        this.storage.set('surveys', surveysData).then(saved => {
          this.router.navigate(['/survey-list']);
        });
      });

    });
  }


}
