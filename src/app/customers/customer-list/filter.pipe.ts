import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class Ng2SearchPipe implements PipeTransform {

  transform(items: any, searchText: string): any {
    if (searchText === undefined) {
      return items;
    }

    return items.filter(function(item) {
      for (const property in item) {
        if (item[property] === null) {
          continue;
        }
        if (item[property].toString().toLowerCase().includes(searchText.toLowerCase())){
          return true;
        }
      }
      return false;
    });
  }
}
