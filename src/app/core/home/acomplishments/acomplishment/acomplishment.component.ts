import { Component, OnInit, Input } from '@angular/core'

import { Acomplishment } from './acomplishment.model'

@Component({
  selector: 'app-acomplishment',
  templateUrl: './acomplishment.component.html',
  styleUrls: ['./acomplishment.component.css']
})
export class AcomplishmentComponent implements OnInit {
  @Input() acomplishment: Acomplishment

  constructor() { }

  ngOnInit() {
  }

}
