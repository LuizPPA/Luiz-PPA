import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

import { TopicService } from './topic/topic.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  aboutColapsed = true

  constructor(private topicService: TopicService) {}

  ngOnInit() {
  }

  getExperiences(){
    return this.topicService.getExperiences()
  }

  getEducation(){
    return this.topicService.getEducation()
  }

  toggleColapse(){
    this.aboutColapsed = !this.aboutColapsed
  }

}
