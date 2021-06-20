import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionService } from 'src/app/core/services';
import { PatientService } from '../services/patient.service';
import { PatientListComponent } from './patients-list.component';


describe('PatientsComponent', () => {
  let component: PatientListComponent;
  let fixture: ComponentFixture<PatientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientListComponent],
      imports: [PatientService, SessionService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
