import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import { AppointmentStatus } from '../../enums';
import { DbModel } from './dbModel';

export class Appointment extends DbModel {
  status: AppointmentStatus;
  doctor: string;
  patient: string;
  startDate: string;
  duration: number; // minutes

  startDateNg?: NgbDateStruct;
  startTime: string;
  startTimeNg?: NgbTimeStruct;
}
