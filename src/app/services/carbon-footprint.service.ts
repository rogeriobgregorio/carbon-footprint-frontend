import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CarbonFootprintService {
  private readonly baseUrl = 'http://localhost:3000/carbon-footprint';

  constructor(private readonly http: HttpClient) {}

  createEntry(data: any) {
    return this.http.post(`${this.baseUrl}`, data);
  }

  getHistory(userId: string) {
    return this.http.get(`${this.baseUrl}?userId=${userId}`);
  }

  getOffsetCost(userId: string) {
    return this.http.get(`${this.baseUrl}/offset-cost?userId=${userId}`);
  }
}
