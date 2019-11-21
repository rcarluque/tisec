import { NgModule } from '@angular/core';
import { MenuDirective } from './menu.directive';
import { MenuItemDirective } from './menu-item.directive';
import { SectionDirective } from './section.directive';
import { SectionItemDirective } from './section-item.directive';

@NgModule({
  declarations: [
    MenuDirective,
    MenuItemDirective,
    SectionDirective,
    SectionItemDirective
  ],
  imports: [
  ],
  exports: [
    MenuDirective,
    MenuItemDirective,
    SectionDirective,
    SectionItemDirective
  ]
})
export class TisecModule { }
