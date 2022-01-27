import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  step: number = 1
  isSubmited: boolean = false
  registrationError: string =''
  user: any= {
    name: '',
    firstName: '',
    email: '',
    appoge: '',
    password: '',
    passwordConfirmation: ''
  }
  constructor(
    private etudiantService : EtudiantService,
    private router : Router
  ) { }

  ngOnInit(): void {
    if (this.etudiantService.getIsAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }

  incrementStep () {
    this.isSubmited = true
    if (this.isNameValide() && this.isFirstNameValide() && this.step == 1) {
      this.step += 1
      this.isSubmited = false
    }
    if (this.isEmailValide() && this.isAppogeValide() && this.step == 2) {
      this.step += 1
      this.isSubmited = false
    }
    if (this.isEmailValide() && this.isAppogeValide() && this.step == 2) {
      this.step += 1
      this.isSubmited = false
    }
    //this.step += 1
  }
  decrementStep () {
    this.step -= 1
  }
  isNameValide () {
    return this.getNameLength() > 0
  }
  isFirstNameValide () {
    return this.getFirstNameLength() > 0
  }
  isEmailValide () {
    const regex = new RegExp('[a-z0-9]+@[a-z]+[.][a-z]{2,3}')
    return regex.test(this.user.email)
  }
  getAppogeLength () {
    return this.user.appoge.length
  }
  getNameLength () {
    return this.user.name.length
  }
  getFirstNameLength () {
    return this.user.firstName.length
  }
  getPasswordLength () {
    return this.user.password.length
  }
  getConfirmPasswordLength () {
    return this.user.passwordConfirmation.length
  }
  isAppogeValide () {
    const regex = new RegExp('[A-Z0-9]{8,}')
    return regex.test(this.user.appoge)
  }
  isPasswordValide () {
    return this.getPasswordLength() >= 8
  }
  isComfirmPasswordValide () {
    return this.getConfirmPasswordLength() >= 8
  }
  passWordNotValide () {
    const state = this.isPasswordValide() && this.isComfirmPasswordValide()
    let finalState
    if (state && this.user.password !== this.user.passwordConfirmation) {
      finalState = true
    } else {
      finalState = false
    }
    return finalState
  }
  isUserInformationValid () {
    return this.isNameValide() && this.isFirstNameValide() && this.isEmailValide() && this.isAppogeValide() && this.isPasswordValide() && this.isComfirmPasswordValide() && !this.passWordNotValide()
  }
  getRegistrationErrorLength () {
    return this.registrationError.length
  }
  isRegistrationError () {
    return this.getRegistrationErrorLength() > 0
  }
  register () {
    this.isSubmited = true
    console.log(this.isUserInformationValid())
    if (this.isUserInformationValid()) {
      this.etudiantService.register(this.user).subscribe(
        data => {
          console.log(data)
          if(data.error == null) {
            localStorage.setItem('id',data.user.id)
            this.etudiantService.setIsAuthenticated(true)
            this.etudiantService.setEtudiantFromJson(data.user)
            this.router.navigate(['/home'])
          }else{
            this.step = 2
            this.registrationError = data.error
          }
        },
        error => console.log(error)
      )
      console.log(this.user)
    }
  }



}
