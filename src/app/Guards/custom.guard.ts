import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Resolve,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../Login/login-component';

@Injectable()
export class customCanActivateGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('in can activate guard');
    return true;
  }
}

export interface canComponentDeactivate {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class customCanDeActivateGuard
  implements CanDeactivate<canComponentDeactivate>
{
  canDeactivate(
    component: canComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return component.canExit();
  }
}

@Injectable()
export class customCanActivaChildteGuard implements CanActivateChild {
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('in can activatechild guard');
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true);
      }, 3000);
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class customCanLoadGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('in can loadChild');
    return true;
  }
}

@Injectable({
  providedIn: 'root',
})
export class customResolveGuard implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('in resolve guard');
    return 'RESOLVED DATA !!';
  }
}
