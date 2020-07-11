import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { format } from 'date-fns';


@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.page.html',
  styleUrls: ['./add-survey.page.scss'],
})
export class AddSurveyPage implements OnInit {
  step = 1;
  base64Img: any;
  surveyData = {
    date: '',
    province: '',
    name: '',
    phone: '',
    email: '',
    details: '',
    coordinates: '',
    remark: '',
    imgUrl: '',
    imgView: '',
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

  treeList = [1];

  inputedTree = [];

  firfireImgList = [];

  treeImgList = [
    {
      id: 1,
      name: 'ลำพู',
      img: './../assets/trees/ลำพู.JPG'
    },
    {
      id: 2,
      name: 'ทิ้งถ่อน',
      img: './../assets/trees/ทิ้งถ่อน.JPG'
    },
    {
      id: 3,
      name: 'ปอทะเล',
      img: './../assets/trees/ปอทะเล.JPG'
    },
    {
      id: 4,
      name: 'ตีนเป็ด',
      img: './../assets/trees/ตีนเป็ด.JPG'
    },
    {
      id: 5,
      name: 'ไทร',
      img: './../assets/trees/ไทร.jpg'
    },
    {
      id: 6,
      name: 'จาก',
      img: './../assets/trees/จาก.JPG'
    },
    {
      id: 7,
      name: 'แสมดำ',
      img: './../assets/trees/แสมดำ.JPG'
    },
    {
      id: 8,
      name: 'ไกร',
      img: './../assets/trees/ไกร.JPG'
    }
  ];

  fireflyTypeList = [
    {
      id: 1,
      name: 'หิ่งห้อยน้ำกร่อย',
      img: './../assets/imgs/0รูปหิ่งห้อยน้ำกร่อย.jpg'
    },
    {
      id: 2,
      name: 'หิ่งห้อยบกไพโรซีเลีย',
      img: './../assets/imgs/0หิ่งห้อยบกไพโรซีเลีย(Pyrocoelia).jpg'
    },
    {
      id: 3,
      name: 'หิ่งห้อยน้ำจืดอะควาติลิส',
      img: './../assets/imgs/0หิ่งห้อยน้ำจืดอะควาติลิส(S. aquatilis).jpg'
    },
    {
      id: 4,
      name: 'ตัวหนอน',
      img: './../assets/imgs/0ตัวหนอน.JPG'
    }
  ];

  fireflyList = [
    'หิ่งห้อยน้ำกร่อย',
    'หิ่งห้อยน้ำกร่อยวาลิดะ(Pteroptyx valida)',
    'หิ่งห้อยน้ำกร่อยมาแลคคี่(Pteroptyx malaccae)',
    'ตัวหนอนหิ่งห้อยน้ำกร่อย',
    'หิ่งห้อยบก/น้ำจืด',
    'หิ่งห้อยน้ำจืดอะควาติลิส(S. aquatilis)',
    'หิ่งห้อยบกไพโรซีเลีย(Pyrocoelia)',
    'หนอนหิ่งห้อยบกไพโรซีเลีย',
    'หนอนหิ่งห้อยน้ำจืดอะควาติลิส ',
    'อื่นๆ'
  ];

  provinceList = [
    {
      id: 1,
      name: 'บางน้ำผึ้ง'
    },
    {
      id: 2,
      name: 'บางกระสอบ'
    },
    {
      id: 3,
      name: 'ทรงคนอง'
    },
    {
      id: 4,
      name: 'บางกระเจ้า'
    },
    {
      id: 5,
      name: 'บางยอ'
    },
    {
      id: 6,
      name: 'บางกอบัว'
    }
  ];

  profile: any;
  isShowAdd = true;

  constructor(
    private storage: Storage,
    private router: Router,
    private camera: Camera,
    private geolocation: Geolocation
  ) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getProfile();
    this.step = 1;
  }

  onClickSave() {

    // for (let i = 0; i < this.inputedTree.length; i++) {
    //   const index = i + 1;
    //   if (index === 1) {
    //     this.surveyData.tree1 = this.inputedTree[i];
    //   } else if (index === 2) {
    //     this.surveyData.tree2 = this.inputedTree[i];
    //   } else if (index === 3) {
    //     this.surveyData.tree3 = this.inputedTree[i];
    //   } else if (index === 4) {
    //     this.surveyData.tree4 = this.inputedTree[i];
    //   } else if (index === 5) {
    //     this.surveyData.tree5 = this.inputedTree[i];
    //   } else if (index === 6) {
    //     this.surveyData.tree6 = this.inputedTree[i];
    //   } else if (index === 7) {
    //     this.surveyData.tree7 = this.inputedTree[i];
    //   } else if (index === 8) {
    //     this.surveyData.tree8 = this.inputedTree[i];
    //   } else if (index === 9) {
    //     this.surveyData.tree9 = this.inputedTree[i];
    //   } else if (index === 10) {
    //     this.surveyData.tree10 = this.inputedTree[i];
    //   } else if (index === 11) {
    //     this.surveyData.tree11 = this.inputedTree[i];
    //   } else if (index === 12) {
    //     this.surveyData.tree12 = this.inputedTree[i];
    //   }
    // }

    if (this.surveyData.date !== '' && this.surveyData.time) {



      console.log(this.surveyData.date);
      this.surveyData.date = format(new Date(this.surveyData.date), 'dd/MM/yyyy');
      this.surveyData.time = format(new Date(this.surveyData.time), 'hh:mm a');
      console.log(this.surveyData.time);
      console.log(this.surveyData);

      if (this.surveyData.position_id === '1') {
        this.surveyData.position_name = 'อากาศปลอดโปร่ง';
      } else if (this.surveyData.position_id === '2') {
        this.surveyData.position_name = 'ครึ้มก่อนฝนตก';
      } else if (this.surveyData.position_id === '3') {
        this.surveyData.position_name = 'หลังฝนตก';
      } else if (this.surveyData.position_id === '4') {
        this.surveyData.position_name = 'ร้อนอบอ้าว';
      } else if (this.surveyData.position_id === '99') {
        this.surveyData.position_name = 'อื่นๆ';
      }

      if (this.surveyData.light_id + '' === '1') {
        this.surveyData.light_name = 'พื้นที่ชายเลน';
      } else if (this.surveyData.light_id + '' === '2') {
        this.surveyData.light_name = 'บ่อน้ำหรือท้องร่องสวน';
      } else if (this.surveyData.light_id + '' === '3') {
        this.surveyData.light_name = 'สวนรอบบ้าน';
      } else if (this.surveyData.light_id + '' === '4') {
        this.surveyData.light_name = 'สวนป่า';
      } else if (this.surveyData.light_id + '' === '99') {
        this.surveyData.light_name = 'อื่นๆ';
      }

      this.firfireImgList.forEach(element => {
        if (element.id === this.surveyData.firefly_id) {
          this.surveyData.firefly_name = element.name;
        }
      });

      this.treeImgList.forEach(element => {
        if (element.id === this.surveyData.tree_id) {
          this.surveyData.tree_name = element.name;
        }
      });

      this.provinceList.forEach(element => {
        if (element.id === this.surveyData.tumbon_id) {
          this.surveyData.tumbon_name = element.name;
        }
      });

      console.log(this.surveyData.firefly_name);

      this.storage.get('surveys').then(val => {
        let surveysData = [];
        if (val) {
          surveysData = val;
        }
        surveysData.push(this.surveyData);

        this.storage.remove('surveys').then(removed => {
          this.storage.set('surveys', surveysData).then(saved => {
            this.router.navigate(['/survey-list']);
          });
        });
      });
    } else {
      alert('กรุณากรอกวันที่และเวลาสำรวจ');
    }

  }

  onClickSaveNext() {
    if (this.surveyData.date !== '' && this.surveyData.time) {
      if (this.surveyData.position_id === '1') {
        this.surveyData.position_name = 'อากาศปลอดโปร่ง';
      } else if (this.surveyData.position_id === '2') {
        this.surveyData.position_name = 'ครึ้มก่อนฝนตก';
      } else if (this.surveyData.position_id === '3') {
        this.surveyData.position_name = 'หลังฝนตก';
      } else if (this.surveyData.position_id === '4') {
        this.surveyData.position_name = 'ร้อนอบอ้าว';
      } else if (this.surveyData.position_id === '99') {
        this.surveyData.position_name = 'อื่นๆ';
      }

      if (this.surveyData.light_id + '' === '1') {
        this.surveyData.light_name = 'พื้นที่ชายเลน';
      } else if (this.surveyData.light_id + '' === '2') {
        this.surveyData.light_name = 'บ่อน้ำหรือท้องร่องสวน';
      } else if (this.surveyData.light_id + '' === '3') {
        this.surveyData.light_name = 'สวนรอบบ้าน';
      } else if (this.surveyData.light_id + '' === '4') {
        this.surveyData.light_name = 'สวนป่า';
      } else if (this.surveyData.light_id + '' === '99') {
        this.surveyData.light_name = 'อื่นๆ';
      }

      this.firfireImgList.forEach(element => {
        if (element.id === this.surveyData.firefly_id) {
          this.surveyData.firefly_name = element.name;
        }
      });

      this.treeImgList.forEach(element => {
        if (element.id === this.surveyData.tree_id) {
          this.surveyData.tree_name = element.name;
        }
      });

      this.provinceList.forEach(element => {
        if (element.id === this.surveyData.tumbon_id) {
          this.surveyData.tumbon_name = element.name;
        }
      });

      const oldDate = this.surveyData.date;
      const oldTime = this.surveyData.time;
      console.log(this.surveyData.date);
      this.surveyData.date = format(new Date(this.surveyData.date), 'dd/MM/yyyy');
      this.surveyData.time = format(new Date(this.surveyData.time), 'hh:mm a');
      console.log(this.surveyData.time);
      console.log(this.surveyData);

      this.storage.get('surveys').then(val => {
        let surveysData = [];
        if (val) {
          surveysData = val;
        }
        surveysData.push(this.surveyData);

        this.storage.remove('surveys').then(removed => {
          this.storage.set('surveys', surveysData).then(saved => {
            // this.router.navigate(['/survey-list']);
            this.surveyData.date = oldDate;
            this.surveyData.time = oldTime;
            this.surveyData.coordinates = '';
            this.surveyData.firefly_id = 0;
            this.surveyData.firefly_name = '';
            this.surveyData.tree_id = 0;
            this.surveyData.fireflycount = '';
            this.surveyData.l_lat = '';
            this.surveyData.l_long = '';
            this.surveyData.tree_name = '';
            this.surveyData.remark = '';
            this.step = 3;
          });
        });
      });

    } else {
      alert('กรุณากรอกวันที่และเวลาสำรวจ');
    }

  }

  getProfile() {
    this.storage.get('profile').then(val => {
      if (val) {
        this.profile = val;

        this.surveyData.name = val.name;
        this.surveyData.phone = val.tel;
        this.surveyData.email = val.email;
        this.surveyData.province = val.province.name;
        this.surveyData.tumbon_name = val.province.name;
        this.surveyData.tumbon_id = val.province.id;
        // this.surveyData.tumbon_id = val.province;
      }
    });
  }

  getCurrentLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude

      this.surveyData.coordinates = resp.coords.latitude + ', ' + resp.coords.longitude;
      this.surveyData.l_lat = resp.coords.latitude + '';
      this.surveyData.l_long = resp.coords.longitude + '';

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  addTree() {
    if (this.treeList.length < 12) {
      this.treeList.push(1);
      if (this.treeList.length >= 12) {
        this.isShowAdd = false;
      }
    }
  }

  pickImage() {
    // this.completePayment();
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // this.base64Img = 'data:image/jpeg;base64,' + imageData;
      this.base64Img = 'data:image/jpeg;base64,' + imageData;
      console.log(this.base64Img);
      // this.cropImage(imageData)
      if (this.base64Img) {
        this.surveyData.imgUrl = imageData;
        this.surveyData.imgView = this.base64Img;
      }
      // alert(base64Image);
    }, (err) => {
      // Handle error
    });
  }

  onClickNext() {


    if (this.step === 3 && this.surveyData.firefly_type !== 'หิ่งห้อยน้ำกร่อย' && this.surveyData.firefly_type !== 'ตัวหนอน') {
      this.step++;
      this.step++;
      this.step++;
    } else if (this.step === 4 && this.surveyData.firefly_type !== 'หิ่งห้อยน้ำกร่อย') {
      this.step++;
      this.step++;
    } else {
      this.step++;
    }
  }

  onClickBack() {
    // this.step--;
    if (this.step === 6 && this.surveyData.firefly_type !== 'หิ่งห้อยน้ำกร่อย' && this.surveyData.firefly_type !== 'ตัวหนอน') {
      this.step--;
      this.step--;
      this.step--;
    } else if (this.step === 6 && this.surveyData.firefly_type === 'ตัวหนอน') {
      this.step--;
      this.step--;
    } else {
      this.step--;
    }

  }

  changeType() {
    console.log(this.surveyData.firefly_type);
    this.firfireImgList = [];
    if (this.surveyData.firefly_type === 'หิ่งห้อยบกไพโรซีเลีย') {
      this.surveyData.firefly_name = this.surveyData.firefly_type;
      this.surveyData.firefly_id = 5;
    }

    if (this.surveyData.firefly_type === 'หิ่งห้อยน้ำจืดอะควาติลิส') {
      this.surveyData.firefly_name = 'หิ่งห้อยน้ำจืดอะควาติลิส(S. aquatilis)';
      this.surveyData.firefly_id = 3;
    }

    if (this.surveyData.firefly_type === 'หิ่งห้อยน้ำกร่อย') {
      this.firfireImgList = [
        {
          id: 2,
          name: 'หิ่งห้อยน้ำกร่อยมาแลคคี่(Pteroptyx malaccae)',
          img: './../assets/imgs/หิ่งห้อยน้ำกร่อยมาแลคคี่ ตัวเล็ก กะพริบเร็ว (Pteroptyx malaccae).JPG'
        },
        {
          id: 1,
          name: 'หิ่งห้อยน้ำกร่อยวาลิดะ(Pteroptyx valida)',
          img: './../assets/imgs/หิ่งห้อยน้ำกร่อยวาลิดะ ตัวใหญ่ กะพริบช้า (Pteroptyx valida).JPG'
        }
      ];
    } else if (this.surveyData.firefly_type === 'ตัวหนอน') {
      this.firfireImgList = [
        {
          id: 7,
          name: 'ตัวหนอนหิ่งห้อยน้ำกร่อย',
          img: './../assets/imgs/หนอนหิ่งห้อยน้ำกร่อย.jpg'
        },
        {
          id: 6,
          name: 'หนอนหิ่งห้อยน้ำจืดอะควาติลิส',
          img: './../assets/imgs/หนอนหิ่งห้อยน้ำจืดอะควาติลิส(S. aquatilis).jpg'
        },
        {
          id: 5,
          name: 'หนอนหิ่งห้อยบกไพโรซีเลีย',
          img: './../assets/imgs/หนอนหิ่งห้อยบกไพโรซีเลีย.jpg'
        },
        {
          id: 12,
          name: 'หนอนRhagophthalmus',
          img: './../assets/imgs/หนอนRhagophthalmus.jpg'
        }
      ];
    }
  }

  onClickSaveReset() {
    this.surveyData.l_lat = '';
    this.surveyData.l_long = '';
  }

}
