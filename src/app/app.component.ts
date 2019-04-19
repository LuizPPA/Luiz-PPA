import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app'
  public menu_collapsed: boolean = false

  public on_menu_collapse(collapsed_state: boolean){
    this.menu_collapsed = collapsed_state
  }
}
