import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';

const primeNgModules = [TableModule, OverlayPanelModule, ButtonModule];

@NgModule({
  declarations: [],
  imports: [...primeNgModules],
  exports: [...primeNgModules],
})
export class PrimengModule {}
