import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'


import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module'
import { TopicService } from './core/home/topic/topic.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
