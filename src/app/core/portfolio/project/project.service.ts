import { Injectable, OnInit, OnDestroy } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

import { CoreService } from '../../core.service'

import { Project } from './project.model'

@Injectable()
export class ProjectService implements OnDestroy{
  subscription = null
  lang = 'pt'
  projects: Project[] = []

  constructor(private http: Http, private coreService: CoreService){
    this.lang = this.coreService.currentLang
    this.fetchProjects()
    this.subscription = this.coreService.lang.subscribe((lang) => {
      this.lang = lang
      this.fetchProjects()
    })
  }

  putProjects(){
    this.http.put('https://luizppa-com.firebaseio.com/'+this.lang+'/projects.json', this.projects).subscribe((response: Response) => {
      console.log(response)
    })
  }

  fetchProjects(){
    this.http.get('https://luizppa-com.firebaseio.com/'+this.lang+'/projects.json')
      .map((response: Response) => {
        let projects: Project[] = response.json()
        for (let project of projects){
          if(!project['download']){
            project['download'] = null
          }
          if(!project['links']){
            project['links'] = []
          }
        }
        return projects
      })
      .subscribe((projects: Project[]) => {
        this.projects = projects
      })
  }

  getProjects(){
    return this.projects.slice()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
