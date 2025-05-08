import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarbonFootprintRoutingModule } from './carbon-footprint-routing.module';
import { CarbonFootprintComponent } from './carbon-footprint.component';
import { FormComponent } from './form/form.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [CarbonFootprintComponent, FormComponent, HistoryComponent],
  imports: [CommonModule, FormsModule, CarbonFootprintRoutingModule],
})
export class CarbonFootprintModule {}
