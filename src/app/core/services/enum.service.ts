import { Injectable } from '@angular/core';
import { AppointmentStatus, UserGender, UserType } from '../enums';
import { KeyNameModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EnumService {

  constructor() { }

  public static getGenderArray(): Array<KeyNameModel> {
   return this.getArrayValues(UserGender);
  }
  public static getUserTypeArray(): Array<KeyNameModel> {
    return this.getArrayValues(UserType);
  }
  public static GetAppointmentStatusArray(): Array<KeyNameModel> {
    return this.getArrayValues(AppointmentStatus);
  }

  private static getArrayValues(e:any){
    const result = new Array<KeyNameModel>();
    for (let i = 0; i < Object.values(e).length; i++) {
      const element = e[i];
      if (element) {
        const newKeyName = new KeyNameModel();
        newKeyName.key = i;
        newKeyName.name = element;
        result.push(newKeyName);
      }
    }
    return result;
  }
}
