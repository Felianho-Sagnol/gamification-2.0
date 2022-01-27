import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEtudiant } from '../interfaces/etudiant.interface';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl: string = 'http://127.0.0.1:8000/api/auth/'
  private isAuthenticated: boolean = false
  etudiantSubjet = new Subject<any[]>()

  private etudiant : any = null

  user : any = {
    isAuthenticated : false,
    infos : null
  }

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  emitEtudiant() {
    this.etudiantSubjet.next(this.user)
  }

  login(data:any){
    return this.http.post<any>(this.baseUrl + 'login',data)
  }

  register(data:any) {
    return this.http.post<any>(this.baseUrl + 'register',data)
  }

  getEtudiantById(id:number){
    return this.http.post<any>(this.baseUrl + 'getEtudiantById',{id : id})
  }

  setIsAuthenticated(isAuthenticated: boolean){
    this.user.isAuthenticated = isAuthenticated
    this.emitEtudiant()
  }

  setEtudiantInfos(){
    let id = localStorage.getItem('id')
    if(id !== undefined && id != null){
      this.getEtudiantById(+id).subscribe(
        respose => {
          let data = respose
          if(data.error == null){
            this.user.isAuthenticated = true
            this.setEtudiantFromJson(data.user)
          }
        },
        error => console.log(error)
      )
      this.emitEtudiant()
    }
  }

  getIsAuthenticated(){
    return this.user.isAuthenticated
  }

  getEtudiant(){
    return this.user.infos
  }

  setEtudiantFromJson(e:any){
    let etudiant : IEtudiant = {
      id: e.id,
      name: e.name,
      firstName : e.firstName,
      email : e.email,
      appoge : e.appoge,
      etudiant_stars: e.etudiant_stars,
      etudiant_vie:e.etudiant_vie,
      coach_id : e.coach_id,
    }
    this.user.infos = etudiant
    this.emitEtudiant()
  }

  disconnectEtudiant() {
    if(this.user.isAuthenticated){
      localStorage.removeItem('id')
      this.user.isAuthenticated = false
      this.user.infos = null
      this.emitEtudiant()
      this.router.navigate(['/login/false'])
    }
  }

}
