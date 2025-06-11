import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverBackground]'
})
export class HoverBackgroundDirective {

  constructor(private render: Renderer2, private el:ElementRef) { }
  @HostListener('mouseover') onHover(){
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', 'green')
  }
  @HostListener('mouseleave') onLeave(){
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', 'red')
  }

}
