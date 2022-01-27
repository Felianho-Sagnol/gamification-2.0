import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EtudiantService } from './services/etudiant.service';
import { SectionService } from './services/section.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'resolutionProbleme';

  constructor(
    private etudiantService: EtudiantService,
  ) { }

  ngOnInit(): void {
    this.etudiantService.setEtudiantInfos()
  }
}
