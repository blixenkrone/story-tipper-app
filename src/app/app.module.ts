import { BrowserModule } from '@angular/platform-browser';
import { MailComponent } from './mail/mail.component';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [MailComponent],
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(MailComponent, { injector: this.injector });
    customElements.define('story-tipper', el);
  }
}
