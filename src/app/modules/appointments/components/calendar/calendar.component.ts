import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, addMinutes } from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView, } from 'angular-calendar';
import { RequestService } from 'src/app/core/services';
import { Appointment } from 'src/app/core/models/db';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReturnListModel } from 'src/app/core/models/responses';

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

  // calendarAppointments = new Array<CalendarEvent>();
  calendarAppointments$: Observable<CalendarEvent<{ appt: Appointment }>[]>;


  appointments = new Array<Appointment>();
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  CalendarView = CalendarView;
  refresh: Subject<any> = new Subject();
  constructor(private modal: NgbModal, private rService: RequestService) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.calendarAppointments$ = this.rService.getList<Appointment>('appointment/upcoming').pipe(
      map((result: ReturnListModel<Appointment>) => {
        return result.model.map((appt: Appointment) => {
          return {
            start: new Date(appt.startDate),
            title: 'A 3 day event',
            color: colors.red,
            allDay: false,
            draggable: false,
            id: appt.guid,
            end: addMinutes(new Date(appt.startDate), appt.duration), //new Date(new Date(appt.startDate).setMinutes(appt.duration)),
            meta: { appt }
          };
        })
      })
    );
    // this.rService.getList<Appointment>('appointment/upcoming').subscribe(data => {
    //   console.log("DATA", data);
    //   this.generateCalendarAppointments(data.model);
    //   //  console.log("EVENT", this.calendarAppointments);
    // })
  }
  generateCalendarAppointments(appts: Array<Appointment>) {
    // appts.forEach(appt => {
    //   const newApptCalendar: CalendarEvent = {
    //     start: new Date(appt.startDate),
    //     title: 'A 3 day event',
    //     color: colors.red,
    //     allDay: false,
    //     draggable: false,
    //     id: appt.guid,
    //     end: addMinutes(new Date(appt.startDate), appt.duration), //new Date(new Date(appt.startDate).setMinutes(appt.duration)),
    //     meta: appt
    //   };
    //   this.calendarAppointments.push(newApptCalendar);
    // });

  }
  handleEvent(action: string, event: CalendarEvent): void {
    console.log("ACTION", action);
    console.log("EVENT", event);

  }
}