import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { CoreService } from '../../core.service'

import { Project } from './project.model'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnDestroy {
  subscription = null
  ver = 'Ver projeto no'
  @Input() project: Project

  constructor(private coreService: CoreService) {
    if(this.coreService.currentLang == 'en'){
      this.ver = 'See project at'
    }
    this.subscription = this.coreService.lang.subscribe((lang) => {
      if(lang == 'en'){
        this.ver = 'See project at'
      }
      else if(lang == 'pt'){
        this.ver = 'Ver projeto no'
      }
    })
  }

  ngOnInit() {
  }

  downloadable(){
    return this.project.download != null
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
