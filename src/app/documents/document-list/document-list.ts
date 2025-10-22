import { Component, EventEmitter, Output } from '@angular/core';

import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  standalone: false,
  templateUrl: './document-list.html',
  styleUrl: './document-list.css'
})
export class DocumentList {
@Output() selectedDocumentEvent= new EventEmitter<Document>();

  documents: Document[] = [
    new Document(1, "Journal", "Record of my life experiences", "https://jeremy/troy/suchanski/rocks/right/here.pdf", null),
    new Document(1, "Goals", "Goals I set", "https://jeremy/troy/suchanski/rocks/right/there.pdf", null),
    new Document(1, "Victories", "Record of my successes", "https://jeremy/troy/suchanski/rocks/over/here.pdf", null),
    new Document(1, "Notes", "Things to remember", "https://jeremy/troy/suchanski/rocks/over/there.pdf", null),
  ]

  onSelectedDocument(document: Document){
    this.selectedDocumentEvent.emit(document);
  }
}
