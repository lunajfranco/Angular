import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';




@NgModule({
  declarations: [
    VerPaisComponent,
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent
  ],
  exports: [
    VerPaisComponent,
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaisModule { }
