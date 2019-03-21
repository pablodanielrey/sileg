import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule,
         MatButtonToggleModule,
         MatIconModule,
         MatInputModule,
         MatListModule,
         MatDialogModule,
         MatStepperModule,
         MatMenuModule,
         MatProgressBarModule,
         MatProgressSpinnerModule,
         MatSidenavModule,
         MatToolbarModule,
         MatDatepickerModule,
         MatCardModule,
         MatSlideToggleModule,
         MatTableModule,
         MatChipsModule,
         MatSnackBarModule,
         MatTabsModule,
         MatSortModule,
         MatSelectModule,
         MatNativeDateModule,
         MatTreeModule,
         MatCheckboxModule,
         MatTooltipModule,
         MatBadgeModule
       } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {  OAuthService } from 'angular-oauth2-oidc';

import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { Oauth2Component } from './oauth2/oauth2.component';
import { Oauth2Service } from './oauth2/oauth2.service';
import { OidpGuard } from './oauth2/oidp.guard';
//import { ErrorComponent } from './error/error.component';

import { SistemaComponent } from './sistema/sistema.component';


const routes: Routes = [
  //{ path: 'error/:error', component: ErrorComponent },
  { path: 'oauth2', component: Oauth2Component },
  //{ path: 'loader', component: LoaderComponent },
  {
    path: 'sistema',
    //canActivate: [OidpGuard],
    component: SistemaComponent,
  }
  //{ path: '**', redirectTo: 'oauth2', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    Oauth2Component,
    SistemaComponent
  ],
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    MatStepperModule,
    MatMenuModule,
    MatChipsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTabsModule,
    MatSortModule,
    MatSelectModule,
    MatTreeModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatBadgeModule,
    OAuthModule.forRoot(),
    /*
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http'],
        sendAccessToken: true
      }
    })*/
    RouterModule.forChild(routes)
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    MatStepperModule,
    MatMenuModule,
    MatSidenavModule,
    MatChipsModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTabsModule,
    MatSortModule,
    MatSelectModule,
    MatTreeModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatBadgeModule
  ],
  providers: [
    OidpGuard,
    Oauth2Service,
    { provide: OAuthStorage, useValue: localStorage }
  ]
})
export class CoreModule { }
