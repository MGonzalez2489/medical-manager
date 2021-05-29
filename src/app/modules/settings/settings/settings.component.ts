import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Setting } from 'src/app/core/models/db';
import { SettingService } from '../services/setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm!: FormGroup;
  settings: Array<Setting>;
  get sForm() { return this.settingsForm.controls; }

  constructor(private settingsService: SettingService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.settingsForm = this.formBuilder.group({})
    this.getDoctorSettings();
  }
  getDoctorSettings(): void {
    this.settingsService.getSettings().subscribe(data => {
      this.settings = data.model;
      this.generateForm(data.model);
    })
  }
  generateForm(settings: Array<Setting>) {
    const group: any = {};
    settings.forEach(s => {
      group[s.key] = new FormControl(s.value || null, [Validators.required])
      //this.s.push(new FormControl(s.value || null, [Validators.required]))


    });

    this.settingsForm = new FormGroup(group);
    console.log("SETTINGS FORM", this.settingsForm);
  }
  submit() {

  }
}
