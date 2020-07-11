import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile = {
    name: '',
    tel: '',
    email: '',
    province: {
      id: 0,
      name: ''
    },
    tumbon_id: 0,
    tumbon_name: ''
  };

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

  isEdit = false;

  constructor(
    private storage: Storage
  ) {
    this.storage.get('profile').then(val => {
      if (val) {
        this.profile = val;
      }

      console.log(this.profile);

    });
  }

  ngOnInit() {
  }

  onClickSave() {
    this.profile.tumbon_id = this.profile.province.id;
    this.profile.tumbon_name = this.profile.province.name;
    this.storage.remove('profile').then(val => {
      this.storage.set('profile', this.profile).then(saved => {
        alert('บันทึกข้อมูลสำเร็จ');
        this.isEdit = false;
      });
    });
  }

  onClickEdit() {
    this.isEdit = true;
  }

}
