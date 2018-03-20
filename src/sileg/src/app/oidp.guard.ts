import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';

@Injectable()
export class OidpGuard implements CanActivate {

    constructor(private oauthService: OAuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return true;
      /*
      var hasIdToken = this.oauthService.hasValidIdToken();
      var hasAccessToken = this.oauthService.hasValidAccessToken();
      return (hasIdToken && hasAccessToken);
      */
    }
}
