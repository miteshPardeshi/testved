export class Office {
  id: Number;
  locationName: String;
  phone: phone;
  streetAddressLine1: String;
  streetAddressLine2: String;
  cityName: String;
  stateProvinceCode: String;
  postalCode: String;
}

export class phone {
  constructor(
    public number?: string
  ) { }
}
export class Officedetail {
  constructor(
    public id?: number,
    public locationName?: string,
    public role?: string,
    public phone?: phone,
    public streetAddressLine1?: string,
    public streetAddressLine2?: string,
    public cityName?: string,
    public stateProvinceCode?: number,
    public postalCode?: string
  ) {
  }
}

