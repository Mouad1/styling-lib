import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { PortalModule } from '@angular/cdk/portal';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DomSanitizer } from '@angular/platform-browser';
const materialModules: any[] = [
  MatIconModule,
  MatRippleModule,
  MatCardModule,
  // MatSidenavModule,
  // MatDividerModule,
  // MatTooltipModule,
  // MatInputModule,
  MatFormFieldModule,
  // MatSelectModule,
  // MatExpansionModule,
  // MatAutocompleteModule,
  // MatSnackBarModule,
  // MatStepperModule,
  // MatDialogModule,
  MatButtonModule,
];

const cdkModules: any[] = [PortalModule, DragDropModule];

@NgModule({
  imports: [...materialModules, ...cdkModules],
  exports: [...materialModules, ...cdkModules],
})
export class MaterialModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this._registerIcons();
  }

  private _registerIcons(): void {
    this.matIconRegistry.addSvgIcon(
      `krkn-menu`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/menu.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-cable`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/cable.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-sea`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/sea.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-land`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/land.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-hardware`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/hardware.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-services`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/services.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-summary`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/summary.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-wifi-nok`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/wifi_nok.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-wifi-nok-black`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/wifi_nok_black.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-wifi-ok`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/wifi_ok.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-system`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/navigation/configuration.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-customer`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/navigation/export.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-domain`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/navigation/domain.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-finance`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/navigation/finance.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-network`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/navigation/network.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-overview`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/navigation/overview.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-price-cost`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/navigation/price&cost.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-margin`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/price-schedule/margin.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-payment`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/price-schedule/payment.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      `krkn-bottom-line`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/price-schedule/bottom-line.svg'
      )
    );
  }
}
