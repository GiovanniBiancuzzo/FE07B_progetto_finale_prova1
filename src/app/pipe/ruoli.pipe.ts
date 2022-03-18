import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ruoli'
})
export class RuoliPipe implements PipeTransform {

  transform(roleName: string, ...args: unknown[]): any {
    switch (roleName) {
      case "ROLE_USER":
        return "Utente";
        break;
      case "ROLE_ADMIN":
        return "Amministratore";
        break
    }
  }
}
