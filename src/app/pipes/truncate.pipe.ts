import {Pipe, PipeTransform} from '@angular/core';
import truncate from 'lodash/truncate';

@Pipe({ name: 'truncatePipe'})
export class TruncatePipe implements PipeTransform {

    transform(value, lengthTruncate) {
        return truncate(value, {length: lengthTruncate});
    }
}