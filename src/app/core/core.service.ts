import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { CookieService } from 'ngx-cookie-service'

@Injectable()
export class CoreService{
  currentLang = 'pt'
  lang: Subject<string> = new Subject<string>()

  constructor(private cookies: CookieService){
    if(this.cookies.check('lang')){
      this.currentLang = this.cookies.get('lang')
    }
  }

  changeLanguage(){
    this.currentLang == 'pt' ? this.currentLang = 'en' : this.currentLang = 'pt'
    this.cookies.set('lang', this.currentLang)
    this.lang.next(this.currentLang)
  }
}
