import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

}
