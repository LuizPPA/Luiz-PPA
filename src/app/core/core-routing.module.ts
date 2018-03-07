import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { PortfolioComponent } from './portfolio/portfolio.component'

const coreRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'portfolio', component: PortfolioComponent},
    {path: '**', redirectTo: ''}
  ]

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CoreRoutingModule{

}
