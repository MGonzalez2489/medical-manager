import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Setting } from 'src/app/core/models/db';
import { ReturnListModel } from 'src/app/core/models/responses';
import { RequestService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private requestService: RequestService) { }

  getSettings(): Observable<ReturnListModel<Setting>> {
    return this.requestService.getList<Setting>('settings');
  }
}
