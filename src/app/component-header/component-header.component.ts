import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-component-header',
  templateUrl: './component-header.component.html',
  styleUrls: ['./component-header.component.css']
})
export class ComponentHeaderComponent implements OnInit {
  item: number = 1;

  constructor(private eventServiceService:EventServiceService) { }

  ngOnInit() {
  }

  changeValue() {
    this.item++;
    this.eventServiceService.changeVariable(this.item);
  }
}
