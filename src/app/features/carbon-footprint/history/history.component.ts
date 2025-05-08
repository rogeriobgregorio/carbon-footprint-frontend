import { Component } from '@angular/core';
import { CarbonFootprintService } from '../../../services/carbon-footprint.service';

@Component({
  selector: 'app-history',
  standalone: false,
  templateUrl: './history.component.html',
})
export class HistoryComponent {
  userId = '';
  history: any[] = [];
  offsetCost: number | null = null;

  constructor(private readonly service: CarbonFootprintService) {}

  loadHistory() {
    this.service.getHistory(this.userId).subscribe((res: any) => {
      this.history = res;
    });

    this.service.getOffsetCost(this.userId).subscribe((res: any) => {
      this.offsetCost = res.offsetCostUSD;
    });
  }
}
