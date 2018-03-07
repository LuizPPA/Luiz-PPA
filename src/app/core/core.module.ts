import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { CoreRoutingModule } from './core-routing.module'
import { NavbarComponent } from './navbar/navbar.component'
import { HomeComponent } from './home/home.component'
import { TopicComponent } from './home/topic/topic.component'
import { SkillComponent } from './home/skill/skill.component'
import { AcomplishmentsComponent } from './home/acomplishments/acomplishments.component'
import { AcomplishmentComponent } from './home/acomplishments/acomplishment/acomplishment.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './portfolio/project/project.component'

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    TopicComponent,
    SkillComponent,
    AcomplishmentsComponent,
    AcomplishmentComponent,
    HeaderComponent,
    PortfolioComponent,
    ProjectComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent
  ]
})

export class CoreModule{}
