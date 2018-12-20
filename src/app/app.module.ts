import { BrowserModule } from '@angular/platform-browser';
import { MailComponent } from './mail/mail.component';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [MailComponent],
})
export class AppModule {
  constructor(private injector: Injector) {

    // const array of [@Component: {}, name: string]
    // forof const [component, name] of array
    // do the createCustomElement func below

    const el = createCustomElement(MailComponent, { injector: this.injector });
    customElements.define('story-tipper', el);
  }

  ngDoBootstrap() { }
}
