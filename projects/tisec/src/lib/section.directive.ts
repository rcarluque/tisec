import { Directive, HostListener, ElementRef, Renderer2, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { SectionItemDirective } from './section-item.directive';

@Directive({
  selector: '[tcSection]'
})
export class SectionDirective implements AfterContentInit {

  @ContentChildren(SectionItemDirective) items: QueryList<SectionItemDirective>;

  private elementToApply: string;
  private lastElementApplied: string;
  private selectorScrollItem = 'tcSecion-id';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterContentInit(): void {
    this.lastElementApplied = this.items.first.el.nativeElement.getAttribute(this.selectorScrollItem);
    this.renderer.addClass(this.returnElementSelector(this.lastElementApplied), 'active');
  }

  @HostListener('scroll', ['$event.target.children'])
  onScroll(elements) {
    const scrollDivTop = this.el.nativeElement.getBoundingClientRect().top;
    const scrollDivBottom = this.el.nativeElement.getBoundingClientRect().bottom;

    for (let i = 0; i < elements.length; i++) {
      // Check if attribute exits
      if (elements[i].getAttribute(this.selectorScrollItem)) {
        const itemID = elements[i].getAttribute(this.selectorScrollItem);
        const offsets = this.returnElementSelector(itemID, true).getBoundingClientRect();

        // Primera comprobación -> comprueba el top de cada hijo respecto al padre (variación de 30 puntos para flexibilidad)
        // Segunda comprobación -> comprueba el bottom del padre y le resta el del hijo, si se encuentra entre 28 y 32 está en el final
        if (
          offsets.top > (scrollDivTop - 30) && offsets.top < (scrollDivTop + 30) ||
          (scrollDivBottom - offsets.bottom) > 28 && (scrollDivBottom - offsets.bottom) < 32
        ) {
          this.elementToApply = itemID;
          this.renderer.addClass(this.returnElementSelector(itemID), 'active');
        }
      }
    }

    if (this.elementToApply !== this.lastElementApplied) {
      if (this.lastElementApplied !== undefined) {
        this.renderer.removeClass(this.returnElementSelector(this.lastElementApplied), 'active');
      }
    }

    this.lastElementApplied = this.elementToApply;
  }

  returnElementSelector(id: string, attribute?: boolean) {
    return attribute ? document.querySelector(`[${this.selectorScrollItem}=${id}]`) : document.querySelector(`[tcMenu-id=${id}]`);
  }

}
