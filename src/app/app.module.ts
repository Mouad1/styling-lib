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
import { TagsComponent } from './tags/tags.component';
import { RouterModule, Routes } from '@angular/router';
import { TableDomain1Component } from './table-domain1/table-domain1.component';
import {
  MatOptionModule,
  MatOptionSelectionChange,
} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { TableDomainHeaderComponent } from './table-domain-header/table-domain-header.component';

import { HttpClientModule } from '@angular/common/http';
import { OthersComponent } from './others/others.component';
import { PrimengModule } from './vendors/primeng/primeng.module';
import { IconsComponent } from './icons/icons.component';
import { MaterialModule } from './vendors/material/material.module';
import { IconStyleDirective } from './icon-style.directive';

const routes: Routes = [
  { path: 'button-showcase', component: ButtonShowcaseComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'table', component: TableDomain1Component },
  { path: 'icons', component: IconsComponent },
  { path: 'others', component: OthersComponent },
  { path: '', redirectTo: '/button-showcase', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonShowcaseComponent,
    TypographyComponent,
    TagsComponent,
    TableDomain1Component,
    TableDomainHeaderComponent,
    OthersComponent,
    IconsComponent,
    IconStyleDirective,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatOptionModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    PrimengModule,
    MaterialModule,
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
