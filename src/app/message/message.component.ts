import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService) {
/** we make it public here because we need to bind it
 * in the template, angular only binds to public
 * components
 */

   }

  ngOnInit(): void {
  }

}
