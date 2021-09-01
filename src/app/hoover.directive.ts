import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHoover]'
})
export class HooverDirective {

  constructor(private elem:ElementRef<any>) { }
  @HostListener('mouseover') onPassOver() {
    this.elem.nativeElement.style.backgroundColor = 'blue';
    this.elem.nativeElement.style.color = 'black'
  }

  @HostListener('mouseout') onPassOut() {
    this.elem.nativeElement.style.backgroundColor = '#fff';
  }
}