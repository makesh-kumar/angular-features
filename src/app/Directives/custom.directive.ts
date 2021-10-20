import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

//Attribute directives
@Directive({
  selector: '[highLight]',
})
export class HighLighterDirective {
  constructor(private eleRef: ElementRef) {}

  @HostListener('click') mouseover() {
    this.eleRef.nativeElement.style.fontWeight = 'bold';
    this.eleRef.nativeElement.style.color = 'blue';
  }
  // @HostListener('mouseout') mouseout() {
  //   this.eleRef.nativeElement.style.color = '';
  // }
}
