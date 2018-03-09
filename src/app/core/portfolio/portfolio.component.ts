import { Component, OnInit, OnDestroy } from '@angular/core'

import { ProjectService } from './project/project.service'
import { CoreService } from '../core.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  portfolio = 'Portifólio'
  subscription = null

  constructor(private projectService: ProjectService, private coreService: CoreService) { }

  ngOnInit() {
    if(this.coreService.currentLang == 'en'){
      this.portfolio = 'Portfolio'
    }
    else if(this.coreService.currentLang == 'pt'){
      this.portfolio = 'Portifólio'
    }
    this.subscription = this.coreService.lang.subscribe((lang) => {
      if(lang == 'en'){
        this.portfolio = 'Portfolio'
      }
      else if(lang == 'pt'){
        this.portfolio = 'Portifólio'
      }
    })
    document.getElementById('top').scrollIntoView()
  }

  getProjects(){
    return this.projectService.getProjects()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
