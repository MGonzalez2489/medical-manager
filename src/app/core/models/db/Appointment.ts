import { AppointmentStatus } from "../../enums";
import { Doctor } from "./Doctor";
import { Patient } from "./Patient";

export class Appointment {
  status: AppointmentStatus;
  doctor: Doctor;
  patient: Patient;
  date: string;
  durationAprox: number; //minutes
}
