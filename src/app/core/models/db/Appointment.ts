import { AppointmentStatus } from "../../enums";
import { DbModel } from "./dbModel";
import { Doctor } from "./Doctor";
import { Patient } from "./Patient";

export class Appointment extends DbModel {
  status: AppointmentStatus;
  doctor: Doctor;
  patient: Patient;
  date: string;
  durationAprox: number; //minutes
}
