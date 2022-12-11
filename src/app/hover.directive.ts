import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(public hover: ElementRef) { 
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.hover.nativeElement.style.color = "orange";
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.hover.nativeElement.style.color = "white";
  }

}
