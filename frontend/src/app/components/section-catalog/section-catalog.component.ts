import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-section-catalog',
  templateUrl: './section-catalog.component.html',
  styleUrls: ['./section-catalog.component.css']
})
export class SectionCatalogComponent implements OnInit {
  sections : any[] = []
  constructor(
    public sectionService : SectionService,
    private etudiantService : EtudiantService,
    private router : Router
  ) {
    this.sectionService.getSectionFromBackend()
   }

  ngOnInit(): void {
    this.sections = this.sectionService.getSections()
    console.log(this.sectionService.getSections())
  }

  goto(id:number): void {
    this.router.navigate(['/section1'])
  }

}
