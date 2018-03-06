import { Component, OnInit, Input } from '@angular/core'

import { AcomplishmentService } from './acomplishment/acomplishment.service'

@Component({
  selector: 'app-acomplishments',
  templateUrl: './acomplishments.component.html',
  styleUrls: ['./acomplishments.component.css']
})
export class AcomplishmentsComponent implements OnInit {

  constructor(private acomplishmentService: AcomplishmentService) {}

  ngOnInit() {
  }

  getLanguages(){
    return this.acomplishmentService.getLanguages()
  }

  getAwards(){
    return this.acomplishmentService.getAwards()
  }

  getCertificates(){
    return this.acomplishmentService.getCertificates()
  }

}
