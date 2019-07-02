import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-component-home',
  templateUrl: './component-home.component.html',
  styleUrls: ['./component-home.component.css']
})
export class ComponentHomeComponent implements OnInit {
  item: number = 1;
  subscription: any;

  constructor(private eventServiceService:EventServiceService) { }

  ngOnInit() {
    this.subscription = this.eventServiceService.getEmittedValue()
    .subscribe(item => this.item=item);
  }
  
}
