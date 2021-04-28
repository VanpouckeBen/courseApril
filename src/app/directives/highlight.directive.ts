import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostBinding('style.color') color: null | string = null;

  @HostListener('mouseenter') onMouseEnter(): void {
    // this.highlight('yellow');
    this.color = 'red';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    // this.highlight(null);
    this.color = null;
  }

  private highlight(color: string | null): void {
    // this.el.nativeElement.style.color = color;
    this.render.setStyle(this.el.nativeElement, 'color', color);
  }

}
