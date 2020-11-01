import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
//  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // I can choose which URLs to apply on them the interceptor or change anything with it by cloning it and send the modified request:
    // const modifiedRequest = req.clone({headers: req.headers.append('AuthToken', 'wrfwffv')});
    // to make the request continue
    // return next handle(modifiedRequest);
    // I can use interceptors with response using the handle, after all, handle returns observable:
    // return next handle(modifiedRequest).pipe(
    //  tap((event) => {
    //     console.log(event);
    //  if (event.type === HttpEventType.Response) {
    //    console.log('Response arrived, body data: ');
    //    the response body:
    //    console.log(event.body);
    //  }
    // }));
    return next.handle(req);
  }
}
