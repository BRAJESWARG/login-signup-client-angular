import { Component, OnInit } from '@angular/core';
import { BmwSalesService, BMW_Sale } from '../../services/bmw-sales.service';

@Component({
  selector: 'app-bmw-sales',
  templateUrl: './bmw-sales.component.html',
  styleUrls: ['./bmw-sales.component.css']
})
export class BmwSalesComponent implements OnInit {
  sales: BMW_Sale[] = [];
  newSale: BMW_Sale = { model_name: '', year: new Date().getFullYear(), units_sold: 0, revenue: 0 };

  constructor(private salesService: BmwSalesService) { }

  ngOnInit(): void {
    this.loadSales();
  }

  loadSales(): void {
    this.salesService.getSales().subscribe(data => (this.sales = data));
  }

  addSale(): void {
    this.salesService.addSale(this.newSale).subscribe(() => {
      this.loadSales();
      this.newSale = { model_name: '', year: new Date().getFullYear(), units_sold: 0, revenue: 0 };
    });
  }

  updateSale(sale: BMW_Sale): void {
    if (!sale.id) return;
    this.salesService.updateSale(sale.id, sale).subscribe(() => this.loadSales());
  }

  deleteSale(id: number): void {
    this.salesService.deleteSale(id).subscribe(() => this.loadSales());
  }
}
