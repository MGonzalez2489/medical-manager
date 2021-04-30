import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbModel } from 'src/app/core/models/layout';
import { AppService } from 'src/app/core/services';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }


}
