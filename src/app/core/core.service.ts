import { Subject } from 'rxjs/Subject'

export class CoreService{
  currentLang = 'pt'
  lang: Subject<string> = new Subject<string>()

  constructor(){}

  changeLanguage(){
    this.currentLang == 'pt' ? this.currentLang = 'en' : this.currentLang = 'pt'
    this.lang.next(this.currentLang)
  }
}
