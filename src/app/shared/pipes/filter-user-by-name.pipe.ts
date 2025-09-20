import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUserByName'
})
export class FilterUserByNamePipe implements PipeTransform {
  transform(users: any[], searchText: string): any[] {
    if (!users) return [];
    if (!searchText) return users;
    
    searchText = searchText.toLowerCase();
    return users.filter(user => {
      return user.first_name.toLowerCase().includes(searchText) || 
             user.last_name.toLowerCase().includes(searchText);
    });
  }
}