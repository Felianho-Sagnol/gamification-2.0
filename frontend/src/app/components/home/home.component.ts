import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router : Router,
    private etudiantService: EtudiantService
  ) { }

  ngOnInit(): void {
  }

  start(){
    if(this.etudiantService.getIsAuthenticated()){
      this.router.navigate(['/catalog'])
    }else{
      this.router.navigate(['/login/true'])
    }
  }

}
