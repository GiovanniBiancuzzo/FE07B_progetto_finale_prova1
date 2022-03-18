import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token = environment.myToken;
  tenant = environment.tenantID;
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone({
      headers: request.headers
        .set('Authorization', 'Bearer ' + this.token)
        .set('X-TENANT-ID', this.tenant),
    });

    console.log('Richiesta intercettata');
    return next.handle(myRequest);
  }
}
