import { Component } from '@angular/core';
import { CarbonFootprintService } from '../../../services/carbon-footprint.service';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form = {
    userId: '',
    transportation: { mode: '', distancePerWeek: 0, fuelType: '' },
    energy: { kwhPerMonth: 0 },
    food: { meatFrequency: '', dairyFrequency: '' },
    consumption: {
      clothingPerMonth: 0,
      electronicsPerYear: 0,
      flightsPerYear: 0,
    },
  };

  constructor(private readonly service: CarbonFootprintService) {}

  submit() {
    this.service.createEntry(this.form).subscribe(() => {
      alert('Entrada registrada com sucesso!');
    });
  }
}
