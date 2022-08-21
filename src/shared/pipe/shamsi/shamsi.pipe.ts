import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'shamsi'
})
export class ShamsiPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const MomentDate = moment(new Date(value), 'YYYY-M-D');
    return MomentDate.locale('fa').format('jYYYY/jMM/jDD');
  }

}
