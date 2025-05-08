import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'carbon-footprint',
    loadChildren: () =>
      import('./features/carbon-footprint/carbon-footprint.module').then(
        (m) => m.CarbonFootprintModule
      ),
  },
  { path: '**', redirectTo: 'carbon-footprint' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
