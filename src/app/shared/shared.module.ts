import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule {
}
