import { Injectable, OnInit, OnDestroy } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

import { CoreService } from '../../core.service'

import { Project } from './project.model'

@Injectable()
export class ProjectService implements OnDestroy{
  subscription = null
  lang = 'pt'
  projects: Project[] =
    [
      // new Project(
      //   'Phari Doc Gen',
      //   'https://s3-sa-east-1.amazonaws.com/luizppa-assets/img/rubygems_icon.png',
      //   'https://s3-sa-east-1.amazonaws.com/luizppa-assets/projects/phari_doc_gen.zip',
      //   [
      //     {
      //       url: 'https://rubygems.org/gems/phari_doc_gen',
      //       destination: 'Ruby Gems'
      //     },
      //     {
      //       url: 'https://github.com/PhariSolutions/Phari-Doc-Gen',
      //       destination: 'Github'
      //     }
      //   ],
      //   "Phari Doc Generator is a gem to generate documentation for ruby projects, focused on padrino backends. Initially, I had written this code in order to facilitate my work as a backend developer with regard to documentation. With the completed code I came up with the idea of publishing it to the community as a gem, and the feedback was beter than expected, the gem currently has about five thousand downloads."
      // ),
      // new Project(
      //   'Gidplay',
      //   'https://s3-sa-east-1.amazonaws.com/luizppa-assets/img/gidplay_icon.png',
      //   null,
      //   [
      //     {
      //       url: 'https://play.google.com/store/apps/details?id=teste.ionic.gidplay&hl=pt_BR',
      //       destination: 'Google Play'
      //     },
      //     {
      //       url: 'https://gidplay.com',
      //       destination: 'the oficial website'
      //     }
      //   ],
      //   "Phari Doc Generator is a gem to generate documentation for ruby projects, focused on padrino backends. Initially, I had written this code in order to facilitate my work as a backend developer with regard to documentation. With the completed code I came up with the idea of publishing it to the community as a gem, and the feedback was beter than expected, the gem currently has about five thousand downloads."
      // )
    ]

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
