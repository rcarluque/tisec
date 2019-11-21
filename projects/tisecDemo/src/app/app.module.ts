import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TisecModule } from '../../../tisec/src/lib/tisec.module';
import { OptionsListComponent } from './options-list/options-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsListComponent
  ],
  imports: [
    BrowserModule,
    TisecModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
