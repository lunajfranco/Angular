import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {
  constructor(private autservice : AuthService,
              private route: Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //   if(this.autservice.auth.id){
    //     return true;
    //   }
    //   console.log('blockeado por canActivate')
    //  return false;
    return this.autservice.verificaAutenticacion()
    .pipe(
      tap(estaAutenticado => {
        if (!estaAutenticado){
          this.route.navigate(['./auth/login']);
        }
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean>|  boolean  {
    //  if(this.autservice.auth.id){
    //    return true;
    //  }
    //  console.log('blockeado por canLoad')
    // return false;

    return this.autservice.verificaAutenticacion()
    .pipe(
      tap(estaAutenticado => {
        if (!estaAutenticado){
          this.route.navigate(['./auth/login']);
        }
      })
    );
  }
}
