import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { ButtonShowcaseComponent } from './button-showcase/button-showcase.component';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  declarations: [AppComponent, ButtonShowcaseComponent, TypographyComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
