import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  @Output() item: EventEmitter<number> = new EventEmitter();
  constructor() { }

  changeVariable(variable:number) {
     this.item.emit(variable);
   }

   getEmittedValue() {
     return this.item;
   }
}
