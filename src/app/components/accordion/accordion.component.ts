import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  isExpanded = false;
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

}
