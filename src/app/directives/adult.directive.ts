import {
  ComponentFactoryResolver, Directive,
  Input,
  TemplateRef, ViewContainerRef
} from '@angular/core';
import { AgeRestrictionComponent } from '../components/age-restriction/age-restriction.component';

@Directive({
  selector: '[appAdult]'
})
export class AdultDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  @Input() set appAdult(value: number) {
    if (value >= 18) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AgeRestrictionComponent);
      this.viewContainer.createComponent(componentFactory);
    }
  }

}
