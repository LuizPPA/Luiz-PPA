import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { CoreRoutingModule } from './core-routing.module'
import { NavbarComponent } from './navbar/navbar.component'
import { HomeComponent } from './home/home.component'
import { TopicComponent } from './home/topic/topic.component'
import { SkillComponent } from './home/skill/skill.component'
import { AcomplishmentsComponent } from './home/acomplishments/acomplishments.component'
import { AcomplishmentComponent } from './home/acomplishments/acomplishment/acomplishment.component'

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    TopicComponent,
    SkillComponent,
    AcomplishmentsComponent,
    AcomplishmentComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})

export class CoreModule{}
