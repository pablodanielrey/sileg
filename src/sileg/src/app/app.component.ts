import { Component } from '@angular/core';

import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://oidp.econo.unlp.edu.ar',
  redirectUri: window.location.origin,
  //tokenEndpoint: 'https://oidp.econo.unlp.edu.ar/oauth2/auth',
  userinfoEndpoint: 'https://oidp.econo.unlp.edu.ar/userinfo',
  loginUrl: 'https://oidp.econo.unlp.edu.ar/oauth2/auth',
  logoutUrl: 'https://consent.econo.unlp.edu.ar/logout',
  oidc: false,
  requireHttps: false,
  clientId: 'sileg-ui',
  dummyClientSecret: 'sileg-ui',
  scope: 'openid profile email',
  showDebugInformation: true
}

import { OAuthService } from 'angular-oauth2-oidc';
import { NullValidationHandler, JwksValidationHandler } from 'angular-oauth2-oidc';

interface Profile {
  username: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private oauthService: OAuthService) {
    this.configureWithNewConfigApi();
  }

  private configureWithNewConfigApi() {
    console.log('configurando oauth2');
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.events.subscribe(e => {
        console.debug('oauth/oidc event', e);
    })
    console.log('tratando de loguearme');
    this.oauthService.tryLogin();
    if (this.oauthService.getAccessToken() == null) {
      console.log('No se obtuvo ningun access token asi que inicio el flujo de auth');
      this.oauthService.initImplicitFlow();
    } else {
      this.oauthService.loadUserProfile().then(r => {
        // chequeo que tengan permitido ingresar a la app
        let ditesi = ['30001823', '27294557', '31381082', '29694757', '34928857', '34770038', '31073351', '27821597'];
        let habilitados = ['8700794','21968942','31433408','94656241'];

        let permiso = false;
        let dni = (<Profile>r).username;
        if (ditesi.includes(dni)) {
          permiso = true;
        }

        if (habilitados.includes(dni)) {
          permiso = true;
        }

        if (!permiso) {
          this.salir();
        }

      });

    }
  }

  salir():void {
    this.oauthService.logOut(true);
    window.location.href = this.oauthService.logoutUrl;
    //window.location.reload();
  }
}
