import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[IconStyle]',
})
export class IconStyleDirective {
  @Input() set size(value: string) {
    this.renderer.setStyle(this.el.nativeElement, 'height', value);
    this.renderer.setStyle(this.el.nativeElement, 'width', value);
  }

  @Input() set color(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
