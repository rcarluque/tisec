import { Directive, Input, Output, ElementRef, Renderer2, AfterContentInit, HostListener, EventEmitter } from '@angular/core';
import { Required } from './required.decorator';

@Directive({
  selector: '[tcMenuItem]'
})
export class MenuItemDirective implements AfterContentInit {

  @Required('string')
  @Input('tcMenuItem') attributeValue: string;
  @Output() activeLi = new EventEmitter<MouseEvent>();

  constructor(public el: ElementRef, private renderer: Renderer2) { }

  ngAfterContentInit() {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all ease 0.5s');
    this.renderer.setAttribute(this.el.nativeElement, 'tcMenu-id', this.attributeValue);
  }

  @HostListener('click', ['$event.target'])
  onClick(li: MouseEvent) {
    if (document.querySelector(`[tcSecion-id=${this.attributeValue}]`)) {
      document.querySelector(`[tcSecion-id=${this.attributeValue}]`).scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeLi.emit(li);
    }
  }

}
