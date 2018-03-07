import { Component, OnInit } from '@angular/core'

import { ProjectService } from './project/project.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  getProjects(){
    return this.projectService.getProjects()
  }

}
