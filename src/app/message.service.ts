import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = []; // this is an array of type string

  add(message: string){
    this.messages.push(message);
    //this method adds to the array
  }

  clear(){
    this.messages = [];
    //this method clears the array of string
  }

  constructor() { }
}
/**this is a service used to create messages  */