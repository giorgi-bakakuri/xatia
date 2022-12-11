import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrol]'
})
export class ScrolDirective {

  constructor(public scroll: ElementRef) { }



}
