import { Injectable, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http'
import { CoreService } from '../../../core.service'

import { Acomplishment } from './acomplishment.model'

@Injectable()
export class AcomplishmentService {
  lang = 'pt'

  languages: Acomplishment[] = [
    // new Acomplishment('Portuguese', 'Native', 'Fluent writing, fluent reading, fluent speaking, fluent listening.'),
    // new Acomplishment('English', 'Professional Work Proficiency', 'Good writng, fluent reading, regular speaking, fluent listening.')
  ]
  awards: Acomplishment[] = [
    // new Acomplishment(
    //   'Autonomous Robots Competition of UFMG (CoRA - UFMG)',
    //   '3º place',
    //   'I competed together with two colleagues in the autonomous robot competition held annually by the DA of the Engineering School of UFMG. The competition consisted of designing and building a line-follower robot to compete against 22 other teams tracing several circuits. Our team succeeded with our line follower prototype achieving the third place in the competition.'
    // )
  ]
  certificates: Acomplishment[] = [
    // new Acomplishment('Angular 5', 'Udemy', 'Certified by udemy in the complete course of Angular 5. Certificate number: UC-0VC7AO3P.')
  ]

  constructor(private http: Http, private coreService: CoreService){
    this.lang = this.coreService.currentLang
    this.fetchLanguages()
    this.fetchAwards()
    this.fetchCertificates()
    this.coreService.lang.subscribe((lang) => {
      this.lang = this.coreService.currentLang
      this.fetchLanguages()
      this.fetchAwards()
      this.fetchCertificates()
    })
  }

  putLanguages(){
    this.http.put('https://luizppa-com.firebaseio.com/'+this.lang+'/languages.json', this.languages).subscribe((response: Response) => {
      console.log(response)
    })
  }

  putAwards(){
    this.http.put('https://luizppa-com.firebaseio.com/'+this.lang+'/awards.json', this.awards).subscribe((response: Response) => {
      console.log(response)
    })
  }

  putCertificates(){
    this.http.put('https://luizppa-com.firebaseio.com/'+this.lang+'/certificates.json', this.certificates).subscribe((response: Response) => {
      console.log(response)
    })
  }

  fetchLanguages(){
    console.log('Fetching languages')
    this.http.get('https://luizppa-com.firebaseio.com/'+this.lang+'/languages.json').subscribe((response: Response) => {
      this.languages = response.json()
    })
  }

  fetchAwards(){
    console.log('Fetching awards')
    this.http.get('https://luizppa-com.firebaseio.com/'+this.lang+'/awards.json').subscribe((response: Response) => {
      this.awards = response.json()
    })
  }
  fetchCertificates(){
    console.log('Fetching certificates')
    this.http.get('https://luizppa-com.firebaseio.com/'+this.lang+'/certificates.json').subscribe((response: Response) => {
      this.certificates = response.json()
    })
  }

  getLanguages(){
    return this.languages.slice()
  }

  getAwards(){
    return this.awards.slice()
  }

  getCertificates(){
    return this.certificates.slice()
  }
}
