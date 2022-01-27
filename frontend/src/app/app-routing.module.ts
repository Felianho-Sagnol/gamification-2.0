import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SectionCatalogComponent } from './components/section-catalog/section-catalog.component';
import { IsAuthenticatedGuardService } from './services/is-authenticated-guard.service';
import { IsNotAuthenticatedGuardService } from './services/is-not-authenticated-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'login/:start',
    component: LoginComponent ,
  },

  { path: 'register', component: RegisterComponent },

  {
    path: 'catalog',
    component: SectionCatalogComponent,
  },

  { path: 'section1', component: FirstSectionComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
