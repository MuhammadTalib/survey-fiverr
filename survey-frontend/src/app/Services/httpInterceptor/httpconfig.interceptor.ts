
import { Injectable, Inject } from '@angular/core';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
let access;

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { async } from '@angular/core/testing';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(
        // public dialog: MatDialog,
        public router: Router) { }

   

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let loadingExists  :any;
        const routeURL = request.headers.get('routeURL');
        const token: string = localStorage.getItem('token');
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
            if (request.url == "/") {
                this.router.navigate(['Home']);
                return EMPTY;
            }
        }
        else {
            if (request.url.substr(-10) == "User/Login" || request.url.substr(-23) == "User/forgetUserPassword") {
                console.log('Either Login or Forgot Password request')
            }
            else {
                localStorage.removeItem('token');  
                localStorage.removeItem('userData'); 
                this.router.navigate(['']);
                return EMPTY;
            }
        }


        // Promise.resolve(null).then(() => loadingRef = this.loadingService.open());
        if (!request.body || (request.body && !request.body.isLoderHide && loadingExists) ) {
        }


        // loadingRef = this.getloadingRef();
        // loadingRef = overlyConst;
        // console.log("loadingRef", loadingRef);

        return (
            next.handle(request).pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        // dialogRef.close();
                        if (!request.body || (request.body && !request.body.isLoderHide && loadingExists)) {
                            // loadingRef.close();
                        }
                        let token_tk = event.headers.get('token_tk');
                        if(token_tk){
                            localStorage.setItem('token', token_tk);
                        }                        
                        // if (event.body.dialog) {
                        //     this.errorDialogService.openDialog(event.body.dialog);
                        // }`
                        //console.log('Reuest Success Result--->>>', event.body);
                    }
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                    //console.log("90", error);
                    // dialogRef.close();
                    // if (loadingRef) {
                    if (!request.body || (request.body && !request.body.isLoderHide && loadingExists)) {
                        // loadingRef.close();
                    }

                    // }
                    // let data = {};
                    // data = {
                    //     title: 'Error',
                    //     reason: error && error.error && error.error.err ? error.error.err.message : '',
                    //     // status: error.status
                    // };
                    // this.errorDialogService.openDialog(data);
                    console.log("error: ", error);
                    
                    if(error.status == 401){                        
                        localStorage.removeItem('token');  
                        localStorage.removeItem('userData');                        
                        
                        this.router.navigate(['']);
                        // this.snackbar.open(error.statusText,'error')
                        return EMPTY;
                    }
                    if(error.status == 403){
                        console.log("error.message",error)
                        console.log("req.body",request.body)
                        // this.snackbar.open(error.statusText,'error')
                    }
                    return throwError(error);
                }))
        )
    }
}
