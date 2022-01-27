import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  constructor(
    public etudiantService: EtudiantService,
    private router: Router,
  ) {}

  ngOnInit(): void {

  }
  goto(){
    this.router.navigate(['/login/false'])
  }
  logout(){
    this.etudiantService.disconnectEtudiant()
  }

}
