import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Person } from '../models/person';
import { Office, Officedetail } from '../models/office';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonService {

  personnelStore: Observable<Person[]>;
  officeStore: Observable<Office[]>;
  stateProvinceStore: Observable<any[]>;

  constructor(private _http: Http) { }

  getPersonnel(): Observable<Person[]> {
    if (!this.personnelStore) {
      this.personnelStore = this._http.get('../../assets/data/personnel.json')
        .map((res: Response) => res.json());
    }
    return this.personnelStore;
  }

  createOfficedetail(office: Officedetail): Observable<Officedetail> {
    const copy: Officedetail = Object.assign({}, office);
    return this._http.post('/url', copy).map((res: Response) => {
      return res.json();
    });
  }

  updateofficedetail(office: Officedetail): Observable<Officedetail> {
    const copy: Officedetail = Object.assign({}, office);
    return this._http.put('/url', copy).map((res: Response) => {
      return res.json();
    });
  }

  getOffices(): Observable<Office[]> {
    if (!this.officeStore) {
      this.officeStore = this._http.get('../../assets/data/offices.json')
        .map((res: Response) => res.json());
    }

    return this.officeStore;

  }

  getStateProvinces(): Observable<any[]> {
    if (!this.stateProvinceStore) {
      this.stateProvinceStore = this._http.get('../../assets/data/stateProvinces.json')
        .map((res: Response) => res.json());
    }

    return this.stateProvinceStore;
  }

  updatePersonnel(data: Person) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(this.personnelStore);
    this.personnelStore = this.getPersonnel();
    this.personnelStore.forEach((entry) => {
      const dataIndex = entry.findIndex((e1 => e1.id === data.id));
      entry[dataIndex] = data;
      let body = JSON.stringify(entry);
      this._http.put('localhost:3000', body, { headers: headers }).map((res: Response) => res.json());
    });

  }

  createPersonnel(data: Person) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.personnelStore = this.getPersonnel();
    this.personnelStore.forEach((entry) => {
      // const dataIndex = entry.findIndex((e1 => e1.id === data.id));
      // entry[dataIndex] = data;
      let body = JSON.stringify(entry);
      this._http.post('localhost:3000', body, { headers: headers }).map((res: Response) => res.json());
    });

  }

  updateOffice(data: Office) {
    console.log(data)
    this.officeStore.forEach((entry) => {
      const dataIndex = entry.findIndex((e1 => e1.id === data.id));
      entry[dataIndex] = data;
    });
  }

}
