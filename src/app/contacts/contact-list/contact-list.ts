import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-list',
  standalone: false,
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css'
})
export class ContactList implements OnInit {  
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {

  }
  
  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();

    this.contactService.contactChangedEvent
      .subscribe(
        (contacts: Contact[])=> {
          this.contacts = contacts.sort((a, b) => a.name.localeCompare(b.name));
        }
      )
  }
}

