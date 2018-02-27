import { Injectable, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http'

import { Topic } from './topic.model'

@Injectable()
export class TopicService implements OnInit{
  experiences: Topic[] = []
  education: Topic[] = []

  constructor(private http: Http){
    this.fetchExperiences()
    this.fetchEducation()
  }

  ngOnInit(){
  }

  putExperiences(){
    this.http.put('https://luizppa-com.firebaseio.com/experiences.json', this.experiences).subscribe((response: Response) => {
      console.log(response)
    })
  }

  putEducation(){
    this.http.put('https://luizppa-com.firebaseio.com/education.json', this.education).subscribe((response: Response) => {
      console.log(response)
    })
  }

  fetchExperiences(){
    console.log('Fetching experiences')
    this.http.get('https://luizppa-com.firebaseio.com/experiences.json').subscribe((response: Response) => {
      this.experiences = response.json()
    })
  }

  fetchEducation(){
    console.log('Fetching education')
    this.http.get('https://luizppa-com.firebaseio.com/experiences.json').subscribe((response: Response) => {
      this.education = response.json()
    })
  }

  getExperiences(){
    return this.experiences.slice()
  }

  getEducation(){
    return this.education.slice()
  }
}
