import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from "@angular/http"

@NgModule({
  declarations: [
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule
  ]
})
export class SharedModule {
}
