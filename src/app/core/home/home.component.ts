import { Component, OnInit } from '@angular/core'
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

  constructor(private topicService: TopicService, private skillService: SkillService) {}

  ngOnInit() {
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
