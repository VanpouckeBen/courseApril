import { Component, ViewChild } from '@angular/core';
import { AccordionComponent } from './components/accordion/accordion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularAdvanced';
  @ViewChild('myAccordion') accordion1: AccordionComponent = new AccordionComponent();

  onLike(event: string): void {
    console.log(event);
  }

  toggleAccordion(): void {
    this.accordion1.toggle();
  }
}
