import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module'
import { TopicService } from './core/home/topic/topic.service'
import { SkillService } from './core/home/skill/skill.service'
import { AcomplishmentService } from './core/home/acomplishments/acomplishment/acomplishment.service'
import { ProjectService } from './core/portfolio/project/project.service'
import { CoreService } from './core/core.service'
import { CookieService } from 'ngx-cookie-service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [TopicService, SkillService, AcomplishmentService, ProjectService, CoreService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
