import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  standalone: false,
  templateUrl: './message-edit.html',
  styleUrl: './message-edit.css'
})
export class MessageEdit {
@ViewChild('subject') subjectInputRef: ElementRef;
@ViewChild('msgText') msgTextInputRef: ElementRef;
@Output() addMessageEvent = new EventEmitter<Message>();
currentSender: string = "Jeremy Troy Suchanski";

  onSendMessage(){    
    const msgSubject = this.subjectInputRef.nativeElement.value;
    const msgText = this.msgTextInputRef.nativeElement.value;
    const message = new Message(1, msgSubject, msgText, this.currentSender);  
    this.addMessageEvent.emit(message);  
  }

  onClear(){
    this.subjectInputRef.nativeElement.value = "";
    this.msgTextInputRef.nativeElement.value = "";
  }
}

