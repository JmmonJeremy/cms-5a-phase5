import { Component } from '@angular/core';

import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  standalone: false,
  templateUrl: './message-list.html',
  styleUrl: './message-list.css'
})
export class MessageList {
  messages: Message[] = [
    new Message(2, "Blazers Rock", "The Portland Trail Blazers are going to win the NBA championship this year!", "Paul"),
    new Message(3, "President Oaks is a Prophet", "President Oaks gave an inspired talk at General Conference about family life.", "Elizabeth"),
    new Message(4, "I Like to Dance", "I love ballet and moving to the music. I wish I could dance all the time Dad!", "Miriam"),
  ]

  onAddMessage(message: Message){
    this.messages.push(message);
  }
}

