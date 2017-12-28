import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import 'rxjs/Rx';

import { Person } from '../../models/person';
import { CommonService } from '../../service/common-service.service';
import { Office } from '../../models/office';

@Component({
  selector: 'app-personnel-card',
  templateUrl: './personnel-card.component.html',
  styleUrls: ['./personnel-card.component.css']
})
export class PersonnelCardComponent implements OnInit {
  @Input() personnel: Person;
  @ViewChild('dataContainer') dataContainer: ElementRef;
  personnelForm: FormGroup;
  namePattern = /^[a-zA-Z'-]+$/;
  datePattern = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
  nameValidator = ['', Validators.compose([Validators.required,
  Validators.minLength(2),
  Validators.maxLength(25),
  Validators.pattern(this.namePattern)])];
  editMode = false;
  cardId: String;
  constructor(private _commonService: CommonService, private _fb: FormBuilder) { }

  ngOnInit() {
    console.log('person card');
    
    this.buildForm();


    this.hydrateForm(this.personnel);
    this.cardId = `card${this.personnel.id}`;

  }

  buildForm() {
    this.personnelForm = this._fb.group({
      id: 0,
      firstName: this.nameValidator,
      lastName: this.nameValidator,
      birthDate: ['', Validators.pattern(this.datePattern)],
      hireDate: ['', Validators.pattern(this.datePattern)],
      officeLocation: new Office()
    });
  }

  hydrateForm(data: Person) {

    if (data) {
      console.log(this.personnel);
      this.personnelForm.patchValue(data);
    }
  }

  updatePersonnel() {
    this._commonService.updatePersonnel(this.personnelForm.value);
    this.editMode = false;
  }

}
