import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import { AppointmentStatus } from '../../enums';
import { DbModel } from './dbModel';
import { Doctor } from './Doctor';
import { Patient } from './Patient';

export class Appointment extends DbModel {
  status: AppointmentStatus;
  doctor: Doctor | string;
  patient: Patient | string;
  startDate: string;
  duration: number; // minutes

  startDateNg?: NgbDateStruct;
  startTime: string;
  startHour: number;
  startMinute: number;
}
