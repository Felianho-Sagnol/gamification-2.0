import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  sectionSubjet = new Subject<any[]>()
  sections : any[] = [];
  sectionsUrl : string = 'http://127.0.0.1:8000/api/sections/getSections'
  constructor(
    private http: HttpClient,
  ) { }

  emitSection() {
    this.sectionSubjet.next(this.sections.slice())
  }

  getSectionFromBackend() {
    this.http.get<any>(this.sectionsUrl).subscribe(
      data => {
        this.sections = data.sections
        this.emitSection()
      },
      error => console.log(error)
    )
  }

  getSections(){
    return this.sections
  }
}
