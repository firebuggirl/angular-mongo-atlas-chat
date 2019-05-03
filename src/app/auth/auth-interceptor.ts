import {
  HttpInterceptor,//feature offered via HttpClient..interceptors = functions that run on any outgoing http request
  HttpRequest,
  HttpHandler
} from "@angular/common/http";
import { Injectable } from "@angular/core";

import { AuthService } from "./auth.service";

@Injectable()// use to inject other service into another service
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

//'interceptor' is 'like' middleware for outgoing requests
  intercept(req: HttpRequest<any>, next: HttpHandler) {//Angular calls this method for requests leaving your app
    const authToken = this.authService.getToken();
    const authRequest = req.clone({//clone request before manipulating it because altering request directly will cause errors
      headers: req.headers.set("Authorization", "Bearer " + authToken)//add our token on auth header
    });
    return next.handle(authRequest);
  }
}
