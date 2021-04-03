import { UserType } from '../../enums';
import { UserGender } from '../../enums/user-gender.enum';
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
