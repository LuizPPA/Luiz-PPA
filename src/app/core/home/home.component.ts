import { Component, OnInit, OnDestroy} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CoreService } from '../core.service'

import { TopicService } from './topic/topic.service'
import { SkillService } from './skill/skill.service'

declare var jquery:any
declare var $ :any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  experiences = 'Experiências'
  education = 'Educação'
  skills = 'Habilidades'
  uncolapse = 'Ver mais'
  colapse = 'Ver menos'
  accomplishments = "Realizações"

  subscription = null
  skillsColapsed = true

  constructor(private topicService: TopicService, private skillService: SkillService, private route: ActivatedRoute, private coreService: CoreService) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      try{
        var $root = $('html, body')
        $root.animate({
            scrollTop: $('#'+fragment).offset().top
        }, 300, function () {
            window.location.hash = fragment
        })
      }
      catch(e){
        console.error(e)
      }
    })
    if(this.coreService.currentLang == 'en'){
      this.experiences = 'Experiences'
      this.education = 'Education'
      this.skills = 'Skills'
      this.uncolapse = 'Show more'
      this.colapse = 'Show less'
      this.accomplishments = 'Accomplishments'
    }
    this.subscription = this.coreService.lang.subscribe((lang) => {
      if(lang == 'en'){
        this.experiences = 'Experiences'
        this.education = 'Education'
        this.skills = 'Skills'
        this.uncolapse = 'Show more'
        this.colapse = 'Show less'
        this.accomplishments = 'Accomplishments'
      }
      else if(lang == 'pt'){
        this.experiences = 'Experiências'
        this.education = 'Educação'
        this.skills = 'Habilidades'
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

  getSkills(){
    if(this.skillsColapsed){
      return this.skillService.getSkills(4)
    }
    else{
      return this.skillService.getSkills(0)
    }
  }

  toggleSkillsColapse(){
    this.skillsColapsed = !this.skillsColapsed
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
