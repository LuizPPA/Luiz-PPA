import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { CoreRoutingModule } from './core-routing.module'
import { NavbarComponent } from './navbar/navbar.component'
import { HomeComponent } from './home/home.component';
import { TopicComponent } from './home/topic/topic.component'

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    TopicComponent
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