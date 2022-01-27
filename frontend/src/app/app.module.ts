import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeadComponent } from './components/head/head.component';
import { SectionCatalogComponent } from './components/section-catalog/section-catalog.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IsAuthenticatedGuardService } from './services/is-authenticated-guard.service';
import { EtudiantService } from './services/etudiant.service';
import { SectionService } from './services/section.service';
import { FormsModule } from '@angular/forms';
import { IsNotAuthenticatedGuardService } from './services/is-not-authenticated-guard.service';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { CoachComponent } from './components/coach/coach.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    SectionCatalogComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    FirstSectionComponent,
    HeaderComponent,
    AdminLoginComponent,
    CoachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    IsAuthenticatedGuardService,
    IsNotAuthenticatedGuardService,
    EtudiantService,
    SectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
