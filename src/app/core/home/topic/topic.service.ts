import { Injectable, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http'
import { CoreService } from '../../core.service'

import { Topic } from './topic.model'

@Injectable()
export class TopicService implements OnInit{
  lang = 'pt'
  experiences: Topic[] = []
  education: Topic[] = []

  constructor(private http: Http, private coreService: CoreService){
    this.lang = this.coreService.currentLang
    this.fetchExperiences()
    this.fetchEducation()
    this.coreService.lang.subscribe((lang) => {
      this.lang = this.coreService.currentLang
      this.fetchExperiences()
      this.fetchEducation()
    })
  }

  ngOnInit(){
  }

  putExperiences(){
    this.http.put('https://luizppa-com.firebaseio.com/'+this.lang+'/experiences.json', this.experiences).subscribe((response: Response) => {
        console.log(response)
      }
    )
  }

  putEducation(){
    this.http.put('https://luizppa-com.firebaseio.com/'+this.lang+'/education.json', this.education).subscribe((response: Response) => {
      console.log(response)
    })
  }

  fetchExperiences(){
    console.log('Fetching experiences')
    this.http.get('https://luizppa-com.firebaseio.com/'+this.lang+'/experiences.json').subscribe((response: Response) => {
        this.experiences = response.json()
      },
      (error) => {
        console.log(error)
      }
    )
  }

  fetchEducation(){
    console.log('Fetching education')
    this.http.get('https://luizppa-com.firebaseio.com/'+this.lang+'/education.json').subscribe((response: Response) => {
        this.education = response.json()
      },
      (error) => {
        console.log(error)
      }
    )
  }

  getExperiences(){
    return this.experiences.slice()
  }

  getEducation(){
    return this.education.slice()
  }
}
