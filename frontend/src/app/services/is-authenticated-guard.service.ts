import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { EtudiantService } from './etudiant.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuardService implements CanActivate {

  constructor(
    private etudiantService: EtudiantService,
    private _router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.etudiantService.getIsAuthenticated()) {
      console.log('guard',this.etudiantService.getIsAuthenticated())
      this._router.navigate(['/home']);
    }
    return this.etudiantService.getIsAuthenticated();
  }

}
