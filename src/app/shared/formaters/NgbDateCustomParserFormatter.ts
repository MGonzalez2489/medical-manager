import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';

@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
  readonly DELIMITER = '-';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[1], 10),
        month : parseInt(date[0], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? this.twoDigitsFormat(date.month) + this.DELIMITER + this.twoDigitsFormat(date.day) + this.DELIMITER + date.year : '';
  }

  formatAPI(date: NgbDateStruct | null): string {
    return date ? date.year + this.DELIMITER + this.twoDigitsFormat(date.month) + this.DELIMITER + this.twoDigitsFormat(date.day) : '';
  }

  twoDigitsFormat(val: number): string {
    return `0${val}`.substr(-2);
  }

}
