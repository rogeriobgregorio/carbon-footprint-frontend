import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarbonFootprintComponent } from './carbon-footprint.component';

const routes: Routes = [{ path: '', component: CarbonFootprintComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarbonFootprintRoutingModule { }
