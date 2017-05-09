import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../../app.common/models/User';
import { Role } from '../../app.common/models/Role';

@Pipe({
    name: 'userRole',
    pure: false
})
export class RoleFilter implements PipeTransform {
    transform(items: any[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.Role.RoleName.indexOf(filter) !== -1);
    }
}
