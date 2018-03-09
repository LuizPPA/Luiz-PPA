import { Component, OnInit, OnDestroy } from '@angular/core'
import { trigger, style, transition, animate, keyframes } from '@angular/animations'
import { CoreService } from '../core.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('toggle', [
      transition('void => open', [
        style({
          'opacity': 0,
          'height': 0
        }),
        animate(200)
      ]),
      transition('open => void', [
        animate(200, keyframes([
          style({
            'opacity': 1,
            offset: 0
          }),
          style({
            'opacity': 0,
            'height': 0,
            offset: 1
          }),
        ]))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  work = "Desenvolvedor Full Stack • Phari Solutions"
  education = "Cursando Ciência da Computação • UFMG"
  location = "Belo Horizonte, Brasil"
  uncolapse = "Ver mais"
  colapse = "Ver menos"
  about = "Tenho aprendido diferentes linguagens de programação desde 2014 quando iniciei meu curso técnico no Colégio Técnico da UFMG. Comecei meus estudos com C, e estendi meus conhecimentos para linguagens voltadas para desenvolvimento web, como PHP, JavaScript, HTML e assim por diante. Atualmente, estou estudando para o meu bacharelado em Ciência da Computação na Universidade Federal de Minas Gerais. Além disso, estou envolvido com vários cursos on-line, como design, UX, aprendizado de máquinas e alguns dos frameworks de JavaScript mais utilizados."

  subscription = null
  aboutColapsed = true
  aboutState = 'closed'

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    if(this.coreService.currentLang == 'en'){
      this.work = "Full Stack Developer • Phari Solutions"
      this.education = "Undergraduated in Computer Science • UFMG"
      this.location = "Belo Horizonte, Brazil"
      this.uncolapse = "Show more"
      this.colapse = "Show less"
      this.about = "I have been learning different programming languages ​​since 2014 when I started my technical course at the UFMG Technical College. I started my studies with C, and extended my knowledge to web-oriented languages ​​such as PHP, Ruby, JavaScript and so on. Currently I'm studying for my bachelor's degree in Computer Science at the Federal University of Minas Gerais. Also, i'm involved with several online courses such as design, UX, machine learning and some of the most commonly used JavaScript frameworks."
    }
    this.subscription = this.coreService.lang.subscribe((lang) => {
      if(lang == 'en'){
        this.work = "Full Stack Developer • Phari Solutions"
        this.education = "Undergraduated in Computer Science • UFMG"
        this.location = "Belo Horizonte, Brazil"
        this.uncolapse = "Show more"
        this.colapse = "Show less"
        this.about = "I have been learning different programming languages ​​since 2014 when I started my technical course at the UFMG Technical College. I started my studies with C, and extended my knowledge to web-oriented languages ​​such as PHP, Ruby, JavaScript and so on. Currently I'm studying for my bachelor's degree in Computer Science at the Federal University of Minas Gerais. Also, i'm involved with several online courses such as design, UX, machine learning and some of the most commonly used JavaScript frameworks."
      }
      else if(lang == 'pt'){
        this.work = "Desenvolvedor Full Stack • Phari Solutions"
        this.education = "Cursando Ciência da Computação • UFMG"
        this.location = "Belo Horizonte, Brasil"
        this.uncolapse = "Ver mais"
        this.colapse = "Ver menos"
        this.about = "Tenho aprendido diferentes linguagens de programação desde 2014 quando iniciei meu curso técnico no Colégio Técnico da UFMG. Comecei meus estudos com C, e estendi meus conhecimentos para linguagens voltadas para desenvolvimento web, como PHP, JavaScript, HTML e assim por diante. Atualmente, estou estudando para o meu bacharelado em Ciência da Computação na Universidade Federal de Minas Gerais. Além disso, estou envolvido com vários cursos on-line, como design, UX, aprendizado de máquinas e alguns dos frameworks de JavaScript mais utilizados."
      }
    })
  }

  toggleAboutColapse(){
    this.aboutState == 'closed' ? this.aboutState = 'open' : this.aboutState = 'closed'
    this.aboutColapsed = !this.aboutColapsed
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
