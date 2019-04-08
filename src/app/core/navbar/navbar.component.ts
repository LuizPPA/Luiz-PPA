import { Component, OnInit } from '@angular/core'
import { trigger, style, transition, animate, keyframes } from '@angular/animations'
import { CoreService } from '../core.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('toggle_bar', [
      transition('void => open', [
        style({
          'transform': 'translateX(-100%)'
        }),
        animate(200)
      ]),
      transition('open => void', [
        animate(200, keyframes([
          style({
            'transform': 'translateX(0)'
          }),
          style({
            'transform': 'translateX(-100%)'
          }),
        ]))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
  experiences = 'Experiências'
  education = 'Educação'
  skills = 'Habilidades'
  accomplishments = 'Realizações'
  portfolio = 'Portifólio'
  menu_state = 'open'
  menu_collapsed = false
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

  public collapse_menu(){
    this.menu_collapsed = !this.menu_collapsed
    this.menu_collapsed ? this.menu_state = 'void' : this.menu_state = 'open'
  }
}
