import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes } from '@angular/animations'

import { TopicService } from './topic/topic.service'
import { SkillService } from './skill/skill.service'

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
export class HomeComponent implements OnInit {
  aboutColapsed = true
  skillsColapsed = true
  aboutState = 'closed'

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

  toggleAboutColapse(){
    this.aboutState == 'closed' ? this.aboutState = 'open' : this.aboutState = 'closed'
    this.aboutColapsed = !this.aboutColapsed
  }

  toggleSkillsColapse(){
    this.skillsColapsed = !this.skillsColapsed
  }

}
