import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { CoreService } from '../../core.service'

import { AcomplishmentService } from './acomplishment/acomplishment.service'

@Component({
  selector: 'app-acomplishments',
  templateUrl: './acomplishments.component.html',
  styleUrls: ['./acomplishments.component.css']
})
export class AcomplishmentsComponent implements OnInit, OnDestroy {
  languages = 'Idiomas'
  awards = 'Prêmios'
  certificates = 'Certificados'

  subscription = null

  constructor(private acomplishmentService: AcomplishmentService, private coreService: CoreService) {}

  ngOnInit() {
    if(this.coreService.currentLang == 'en'){
      this.languages = 'Languages'
      this.awards = 'Awards'
      this.certificates = 'Certificates'
    }
    this.subscription = this.coreService.lang.subscribe((lang) => {
      if(lang == 'en'){
        this.languages = 'Languages'
        this.awards = 'Awards'
        this.certificates = 'Certificates'
      }
      else if(lang == 'pt'){
        this.languages = 'Idiomas'
        this.awards = 'Prêmios'
        this.certificates = 'Certificados'
      }
    })
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

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
