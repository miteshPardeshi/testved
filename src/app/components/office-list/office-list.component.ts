import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../app-config';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { CommonService } from '../../service/common-service.service';
import { Observable } from 'rxjs/Observable';
import { Office, phone } from '../../models/office';

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
export class OfficeListComponent implements OnInit {

  officeList: Observable<Office[]>;
  phone: Observable<phone[]>
  editMode = false;
  currentEditId;
  role = AppConfig.role;
  constructor(private _commonService: CommonService,
    private router: Router,) { }

  ngOnInit() {
    this.officeList = this._commonService.getOffices();
    console.log('office lists',this.officeList);
    
  }

  updateOffice(index) {
    this.officeList.forEach(store => store.filter((entry, i) => i === index).forEach(data => this._commonService.updateOffice(data)
    ));
  }

  switchMode(id) {
    console.log(id);
    this.router.navigate['/addoffice']
    // if (!this.editMode) {
    //   this.editMode = true;
    //   this.currentEditId = id;
    // }
    // else {
    //   this.editMode = false;
    //   this.currentEditId = null;
    // }

  }

}
