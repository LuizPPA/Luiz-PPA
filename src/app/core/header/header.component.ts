import { Component, OnInit } from '@angular/core'
import { trigger, style, transition, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('toggle', [
      transition('void => open', [
        style({
          'opacity': 0,
          'height': 0
        }),
        animate(200)
      ]),
      transition('open => void', [
        animate(200, keyframes([
          style({
            'opacity': 1,
            offset: 0
          }),
          style({
            'opacity': 0,
            'height': 0,
            offset: 1
          }),
        ]))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  aboutColapsed = true
  aboutState = 'closed'

  constructor() { }

  ngOnInit() {
  }

  toggleAboutColapse(){
    this.aboutState == 'closed' ? this.aboutState = 'open' : this.aboutState = 'closed'
    this.aboutColapsed = !this.aboutColapsed
  }

}
