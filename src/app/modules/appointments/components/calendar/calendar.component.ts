import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, addMinutes } from 'date-fns';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView, } from 'angular-calendar';
import { RequestService } from 'src/app/core/services';
import { Appointment, Patient } from 'src/app/core/models/db';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReturnListModel } from 'src/app/core/models/responses';
import { AppointmentFormComponent } from 'src/app/shared/components/appointments/appointment-form/appointment-form.component';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {

  calendarAppointments = new Array<CalendarEvent>();
  //calendarAppointments$: Observable<CalendarEvent<{ appt: Appointment }>[]>;


  appointments = new Array<Appointment>();
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  CalendarView = CalendarView;
  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean = true;
  constructor(private modal: NgbModal, private rService: RequestService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {

    this.rService.getList<Appointment>('appointment/upcoming').subscribe(data => {
      this.calendarAppointments = this.generateFormatedEvents(data.model);
      this.refresh.next();
    })
  }
  generateFormatedEvents(data: Array<Appointment>): Array<CalendarEvent> {
    const result: Array<CalendarEvent> = [];

    data.forEach(appt => {
      const newObj = {
        start: new Date(appt.startDate),
        title: (Object.assign(new Patient(), appt.patient)).getFullName(), //(appt.patient as Patient).getFullName(),
        color: colors.red,
        allDay: false,
        draggable: false,
        id: appt.guid,
        end: addMinutes(new Date(appt.startDate), appt.duration), //new Date(new Date(appt.startDate).setMinutes(appt.duration)),
        meta: { appt }
      };
      result.push(newObj);
    });
    return result;
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log("ACTION", action);
    console.log("EVENT", event);

  }
  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  setView(view: CalendarView) {
    this.view = view;
  }
  clickSegment($event) {
    const modal: NgbModalRef = this.modalService.open(AppointmentFormComponent);
    if ($event && $event.date) {
      const selectedDate = $event.date;
      (modal.componentInstance as AppointmentFormComponent).setDateFromSource(selectedDate.toString());
    }
    modal.result.then(result => {
      if (result) {
        this.getAppointments();
      }
    }, reason => {
      console.log("REASON", reason);
    })
  }
}