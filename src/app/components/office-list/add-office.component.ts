import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConfig } from '../../app-config';

import { CommonService } from '../../service/common-service.service';
import { Observable } from 'rxjs/Observable';
import { Office, phone, Officedetail } from '../../models/office';

@Component({
  selector: 'app-add-office-list',
  templateUrl: './add-office.component.html',
  styleUrls: ['./office-list.component.css']
})
export class AddOfficeComponent implements OnInit {


  id: string;
  allOffice: any
  Office: Officedetail;
  role = AppConfig.role;
  phone: phone
  loading: boolean = false;
  userrole: any;

  constructor(private _commonService: CommonService,
    private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.Office = new Officedetail();
    this.phone = new phone();
    this.phone = this.Office.phone;

    this.route.params.subscribe((params) => {
      if (params) {
      var str = window.location.pathname;
        var str_array = str.split('/');
        console.log(str_array[2]);
        this.id = str_array[2];
        this.getalloffice()
      }
      else{
        this.Office = new Officedetail();
        this.phone = new phone();
        this.phone = this.Office.phone;
      }
    })
  }

  getalloffice() {
    this._commonService.getOffices().subscribe(
      (res) => {
        this.loading = true;
        this.allOffice = res;
        console.log(this.allOffice.length);

        for (let i = 0; i < this.allOffice.length; i++) {
          if (this.allOffice[i].id == this.id) {
            this.Office = this.allOffice[i];
          }
        }
      }
    )
  }

  getRole(event) {
    this.Office.role = event;
  }

  save() {
    if(this.id){
      this._commonService.updateofficedetail(this.Office)
      .subscribe((res: Officedetail) =>
          this.onSuccessSave(res), (res: Response) => this.onError(res.json()));
    }
    else{
      this._commonService.createOfficedetail(this.Office)
      .subscribe((res: Officedetail) =>
          this.onSuccessSave(res), (res: Response) => this.onError(res.json()));
    }
  }

  onSuccessSave(data){
    alert(data);
  }

  onError(error){
    alert(error);
  }

}
