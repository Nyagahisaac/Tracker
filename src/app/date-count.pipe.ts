import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): any {
    let today:Date = new Date();
    let todayWithoutNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var lastSeconds = +todayWithoutNoTime - +new Date(value)
    var daysAgo = Math.floor((lastSeconds/360000)/24)
    return daysAgo + "days ago";
  }

}
