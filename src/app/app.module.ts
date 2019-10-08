import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AlertPopupComponent } from "./alert-popup.component";

@NgModule({
  declarations: [AppComponent, AlertPopupComponent],
  entryComponents: [AlertPopupComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
