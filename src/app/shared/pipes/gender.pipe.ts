import { Pipe, PipeTransform } from '@angular/core';
import { UserGender } from 'src/app/core/enums/user-gender.enum';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(gender: UserGender | String): string {
    if (gender) {
      if (gender.toString().toLocaleLowerCase() == 'female') {
        return 'Mujer';
      }
      else {
        return 'Hombre';
      }
    }
    else {
      return '';
    }
  }

}
