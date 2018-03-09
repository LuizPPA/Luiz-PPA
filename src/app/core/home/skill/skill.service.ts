import { Injectable, OnInit, OnDestroy } from '@angular/core'
import { Http, Response } from '@angular/http'
import { CoreService } from '../../core.service'

import { Skill } from './skill.model'

@Injectable()
export class SkillService implements OnDestroy{
  lang = 'pt'

  subscription = null
  skills: Skill[] = [
    // new Skill('Ruby', 'fa fa-gem', 8),
    // new Skill('MySQL', 'fa fa-database', 8),
    // new Skill('C language', 'fas fa-terminal', 8),
    // new Skill('JavaScript', 'fab fa-js-square', 7),
    // new Skill('PHP', 'fab fa-php', 7),
    // new Skill('HTML', 'fab fa-html5', 6),
    // new Skill('CSS', 'fab fa-css3-alt', 6),
    // new Skill('Linux', 'fab fa-linux', 5),
    // new Skill('MongoDB', 'fa fa-database', 5),
    // new Skill('Adobe Illustrator', 'fas fa-pencil-alt', 5),
    // new Skill('Adobe Photoshop', 'fas fa-pencil-alt', 5)
  ]

  constructor(private http: Http, private coreService: CoreService){
    this.lang = this.coreService.currentLang
    this.fetchSkills()
    this.coreService.lang.subscribe((lang) => {
      this.lang = this.coreService.currentLang
      this.fetchSkills()
    })
  }

  putSkills(){
    this.http.put('https://luizppa-com.firebaseio.com/'+this.lang+'/skills.json', this.skills).subscribe((response: Response) => {
      console.log(response)
    })
  }

  fetchSkills(){
    console.log('Fetching skills')
    this.http.get('https://luizppa-com.firebaseio.com/'+this.lang+'/skills.json').subscribe((response: Response) => {
      this.skills = response.json()
    })
  }

  getSkills(amount: number){
    if(amount < 1 || amount > this.skills.length){
      return this.skills.slice()
    }
    else{
      return this.skills.slice(0, amount)
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
