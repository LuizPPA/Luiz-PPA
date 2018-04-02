import { Component, OnInit, Input } from '@angular/core'

import { Skill } from './skill.model'
import { SkillService } from './skill.service'

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skill: Skill

  constructor(private skillService: SkillService) { }

  ngOnInit() {
  }

  range(i: number){
    let x=[]
    for(var j = 0; j < i; j++){
      x.push(j)
    }
    return x
  }

}
