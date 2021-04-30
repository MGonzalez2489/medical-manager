import { UserGender, UserType } from '../../enums';
import { DbModel } from './dbModel';

export abstract class User extends DbModel {
  firstName: string;
  lastName: string;
  birthday: string;
  email: string;
  phone: string;
  gender: UserGender;
  userType: UserType;
}
