import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundGreen]'
})
export class BackgroundGreenDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.backgroundColor = 'green';
    console.log('color has been changed');
  }

}
