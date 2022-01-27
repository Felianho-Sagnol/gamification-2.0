import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  connexionError: string =  ''
  start: boolean= false
  isSubmited:boolean = false
  user:any= {
    email: '',
    password: ''
  }
  constructor(
    private route: ActivatedRoute,
    private etudiantService : EtudiantService,
    private router : Router
  ) { }

  ngOnInit(): void {
    if (this.etudiantService.getIsAuthenticated()) {
      this.router.navigate(['/home']);
    }

    let start = this.route.snapshot.paramMap.get('start')
    if(start == 'true') {
      this.start = true
    }else{
      this.start = false
    }

  }

  isPasswordValide () {
    return this.getPasswordLength() >= 8
  }
  getPasswordLength () {
    return this.user.password.length
  }
  getConnexionErrorLength () {
    return this.connexionError.length
  }
  isEmailValide () {
    const regex = new RegExp('[a-z0-9]+@[a-z]+[.][a-z]{2,3}')
    return regex.test(this.user.email)
  }
  isConnexionError () {
    return this.getConnexionErrorLength() > 0
  }
  isUserInformationValid () {
    return this.isEmailValide() && this.isPasswordValide()
  }
  login () {
    this.isSubmited = true
    if (this.isUserInformationValid()) {
      this.etudiantService.login(this.user).subscribe(
        respose => {
          let data = respose
          if(data.error == null){
            localStorage.setItem('id',data.user.id)
            this.etudiantService.setIsAuthenticated(true)
            this.etudiantService.setEtudiantFromJson(data.user)
            if(this.start){
              this.router.navigate(['/catalog'])
            }else{
              this.router.navigate(['/home'])
            }
          }else{
            this.connexionError = data.error
          }
        },
        error => console.log(error)
      )
    }
  }

}
