import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

@Injectable()
export class ContactService{

  constructor(private http: Http){}

  sendEmail(email, form){
    if(email.from == null || email.name == null || email.message == null || email.from == "" || email.name == "" || email.message == ""){
    }
    else{
      this.http.post('https://us-central1-luizppa-com.cloudfunctions.net/sendMail', email).subscribe((response: Response) => {
        if(response.status == 200){
          window.alert("Email enviado.")
          form.reset()
        }
      })
    }
  }
}
