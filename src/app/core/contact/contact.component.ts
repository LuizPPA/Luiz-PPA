import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ContactService } from './contact.service'
import { CoreService } from '../core.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  contact = "Entre em contato"
  name = "Nome"
  subject = "Assunto"
  message = "Mensagem"
  send = "Enviar"
  subscription = null
  emailForm: FormGroup
  email: {name: string, subject: string, from: string, message: string} = {
    name: null,
    from: null,
    subject: null,
    message: null
  }

  constructor(private contactService: ContactService, private core: CoreService) {
    this.emailForm = new FormGroup(
      {
        'name': new FormControl(null),
        'from': new FormControl(null),
        'subject': new FormControl(null),
        'message': new FormControl(null)
      }
    )
  }

  ngOnInit() {
    if(this.core.currentLang == 'en'){
      this.contact = "Get in touch"
      this.name = "Name"
      this.subject = "Subject"
      this.message = "Message"
      this.send = "Send"
    }
    this.subscription = this.core.lang.subscribe((lang) => {
      if(lang == 'en'){
        this.contact = "Get in touch"
        this.name = "Name"
        this.subject = "Subject"
        this.message = "Message"
        this.send = "Send"
      }
      else if(lang == 'pt'){
        this.contact = "Entre em contato"
        this.name = "Nome"
        this.subject = "Assunto"
        this.message = "Mensagem"
        this.send = "Enviar"
      }
    })
  }

  onSubmit(){
    this.email.name = this.emailForm.get('name').value
    this.email.from = this.emailForm.get('from').value
    this.email.subject = this.emailForm.get('subject').value
    this.email.message = this.emailForm.get('message').value
    this.contactService.sendEmail(this.email, this.emailForm)
    this.email = {
      name: null,
      subject: null,
      from: null,
      message: null
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
