import { Component } from '@angular/core';
import { Contact } from './contact';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public contact: Contact= new Contact();

  public saveMessage(contactForm: NgForm): void{
    console.log(contactForm.form);
    console.log('valeurs: ', JSON.stringify(contactForm.value));
  }
}
