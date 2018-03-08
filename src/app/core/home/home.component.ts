import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { trigger, style, transition, animate, keyframes } from '@angular/animations'

import { TopicService } from './topic/topic.service'
import { SkillService } from './skill/skill.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  skillsColapsed = true

  constructor(private topicService: TopicService, private skillService: SkillService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      try{
        document.getElementById(fragment).scrollIntoView()
      }
      catch(e){
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

}
