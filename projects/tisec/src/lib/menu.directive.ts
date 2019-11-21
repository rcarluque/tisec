import { Directive, ContentChildren, QueryList, Renderer2, AfterContentInit } from '@angular/core';
import { Required } from './required.decorator';
import { MenuItemDirective } from './menu-item.directive';

@Directive({
  selector: '[tcMenu]'
})
export class MenuDirective implements AfterContentInit {

  @Required()
  @ContentChildren(MenuItemDirective) lis: QueryList<MenuItemDirective>;

  constructor(private renderer: Renderer2) { }

  ngAfterContentInit(): void {
    this.lis.forEach(li => {
      li.activeLi.subscribe( liToChange => {
        this.removeClass();
        this.renderer.addClass(liToChange, 'active');
      });
    });
  }

  removeClass() {
    this.lis.forEach(li => {
      this.renderer.removeClass(li.el.nativeElement, 'active');
    });
  }

}
