import { Component, Input } from '@angular/core';

// export interface Configuration {
//   name: string;
//   cables: Cable[];
// }

// export interface Cable {
//   name: string;
//   armorings: Armoring[];
// }

// export interface Armoring {
//   name: string;
// }

// export interface SegmentData {
//   // Define the properties based on your requirements
// }

// export interface GridData {
//   segment: any;
//   spareLocation?: any; // Adjust based on your actual data structure
//   value?: number; // Example property for the value bound to input
//   addSpareLocationLine?: boolean; // Mark as optional if it can be missing
// }

@Component({
  selector: 'app-table-domain1',
  templateUrl: './table-domain1.component.html',
  styleUrls: ['./table-domain1.component.scss'],
})
export class TableDomain1Component {
  configurationName = 'configuration 1';
  productTypes = 'Type 1';
  categories = { name: 'Category 1', types: ['Type A', 'Type B'] };

  // Method to handle the creation of a new configuration
  createNewConfiguration() {
    // const newConfigName = `Config ${String.fromCharCode(
    //   65 + this.configurationNames.length
    // )}`;
    // this.configurationNames.push(newConfigName);
    // Assuming product type and categories remain constant for simplicity
  }

  // Method to handle the duplication of an existing configuration
  duplicateConfiguration(configName: string) {
    const duplicateConfigName = `${configName} Copy`;
    // this.configurationName.push(duplicateConfigName);
    // Logic to duplicate the configuration details if needed
  }
}
