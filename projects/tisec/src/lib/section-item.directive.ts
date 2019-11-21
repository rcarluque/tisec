import { Directive, Input, ElementRef, Renderer2, AfterContentInit } from '@angular/core';
import { Required } from './required.decorator';

@Directive({
  selector: '[tcSectionItem]'
})
export class SectionItemDirective implements AfterContentInit  {

  @Required()
  @Input('tcSectionItem') attributeValue: string;

  constructor(public el: ElementRef, private renderer: Renderer2) { }

  ngAfterContentInit() {
    this.renderer.setAttribute(this.el.nativeElement, 'tcSecion-id', this.attributeValue);
  }

}
