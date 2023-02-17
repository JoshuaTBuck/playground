import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeFieldComponent } from './components/attribute-field/attribute-field.component';
import { FormsModule } from '@angular/forms';
import { ColorComponent } from './components/color/color.component';

@NgModule({
  declarations: [AppComponent, AttributeFieldComponent, ColorComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
