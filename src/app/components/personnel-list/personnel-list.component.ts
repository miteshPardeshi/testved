import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CommonService } from '../../service/common-service.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-personnel-list',
  templateUrl: './personnel-list.component.html',
  styleUrls: ['./personnel-list.component.css']
})
export class PersonnelListComponent implements OnInit {
  personnelList: Observable<Person[]>;

  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    console.log('person');
    
    this.personnelList = this._commonService.getPersonnel();
  }

}
