import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

//Attribute directives
@Directive({
  selector: '[highLight]',
})
export class HighLighterDirective {
  constructor(private eleRef: ElementRef) {}

  // @Input() highLight = '';

  @Input('color') color = '';

  @HostListener('click') mouseover() {
    this.eleRef.nativeElement.style.fontWeight = 'bold';
    this.eleRef.nativeElement.style.color = this.color;
  }
}

//Structural  Directive
@Directive({
  selector: '[isShow]',
})
export class isShowDirective {
  constructor(
    private tempRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    console.log('inn');
  }
  private hasView = false;

  @Input() set isShow(condition: boolean) {
    console.log('set');
    if (condition && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.tempRef);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }
}


@Directive({ selector: '[appUnless]'})
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}