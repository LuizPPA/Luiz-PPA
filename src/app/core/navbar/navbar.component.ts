import { Component, OnInit } from '@angular/core'
import { CoreService } from '../core.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  experiences = 'Experiências'
  education = 'Educação'
  skills = 'Habilidades'
  accomplishments = 'Realizações'
  portfolio = 'Portifólio'

  subscription = null

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    if(this.coreService.currentLang == 'en'){
      this.experiences = 'Experiences'
      this.education = 'Education'
      this.skills = 'Skills'
      this.accomplishments = 'Accomplishments'
      this.portfolio = 'Portfolio'
    }
    this.subscription = this.coreService.lang.subscribe((lang) => {
      if(lang == 'en'){
        this.experiences = 'Experiences'
        this.education = 'Education'
        this.skills = 'Skills'
        this.accomplishments = 'Accomplishments'
        this.portfolio = 'Portfolio'
      }
      else if(lang == 'pt'){
        this.experiences = 'Experiências'
        this.education = 'Educação'
        this.skills = 'Habilidades'
        this.accomplishments = 'Realizações'
        this.portfolio = 'Portifólio'
      }
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
