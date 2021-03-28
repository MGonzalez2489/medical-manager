import { Doctor} from './Doctor';
import { Patient } from './Patient';
import { Receptionist } from './Receptionist';

export class Office {
  name: string;
  address: string;
  doctors: Array<Doctor>;
  receptionist: Array<Receptionist>;
  patients: Array<Patient>;

  constructor() {
    this.doctors = new Array<Doctor>();
    this.receptionist = new Array<Receptionist>();
    this.patients = new Array<Patient>();
  }
}
