import { Component, OnInit, OnDestroy} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CoreService } from '../core.service'
import { trigger, style, transition, animate, keyframes } from '@angular/animations'

import { TopicService } from './topic/topic.service'
import { SkillService } from './skill/skill.service'

declare var jquery:any
declare var $ :any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('toggle', [
      transition('void => open', [
        style({
          'opacity': 0,
          'height': 0
        }),
        animate(400)
      ]),
      transition('open => void', [
        animate(400, keyframes([
          style({
            'opacity': 0,
            offset: 0
          }),
          style({
            'height': 0,
            offset: 1
          }),
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  experiences = 'Experiências'
  education = 'Educação'
  skills = 'Habilidades'
  featuredSkills = 'Habilidades de destaque'
  otherSkills = 'Outras habilidades'
  uncolapse = 'Ver mais'
  colapse = 'Ver menos'
  accomplishments = "Realizações"

  subscription = null
  skillsColapsed = true
  skillsState = 'closed'

  constructor(private topicService: TopicService, private skillService: SkillService, private route: ActivatedRoute, private coreService: CoreService) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      try{
        var $root = $('html, app-home')
        if($('#'+fragment).offset() != null){
          $root.animate({
              scrollTop: $('#'+fragment).offset().top
          }, 300)
        }
      }
      catch(e){
        console.error(e)
      }
    })
    if(this.coreService.currentLang == 'en'){
      this.experiences = 'Experiences'
      this.education = 'Education'
      this.skills = 'Skills'
      this.featuredSkills = 'Top skills'
      this.otherSkills = 'Other skills'
      this.uncolapse = 'Show more'
      this.colapse = 'Show less'
      this.accomplishments = 'Accomplishments'
    }
    this.subscription = this.coreService.lang.subscribe((lang) => {
      if(lang == 'en'){
        this.experiences = 'Experiences'
        this.education = 'Education'
        this.skills = 'Skills'
        this.featuredSkills = 'Top skills'
        this.otherSkills = 'Other skills'
        this.uncolapse = 'Show more'
        this.colapse = 'Show less'
        this.accomplishments = 'Accomplishments'
      }
      else if(lang == 'pt'){
        this.experiences = 'Experiências'
        this.education = 'Educação'
        this.skills = 'Habilidades'
        this.featuredSkills = 'Habilidades de destaque'
        this.otherSkills = 'Outras habilidades'
        this.uncolapse = 'Ver mais'
        this.colapse = 'Ver menos'
        this.accomplishments = "Realizações"
      }
    })
  }

  getExperiences(){
    return this.topicService.getExperiences()
  }

  getEducation(){
    return this.topicService.getEducation()
  }

  getSkills(start: number, amount: number){
    return this.skillService.getSkills(start, amount)
  }

  toggleSkillsColapse(){
    this.skillsState == 'closed' ? this.skillsState = 'open' : this.skillsState = 'closed'
    this.skillsColapsed = !this.skillsColapsed
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
