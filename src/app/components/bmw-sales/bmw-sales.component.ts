import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface BMW_Sale {
  id?: number;
  model: string;
  year: number;
  price: number;
  unitsSold: number;
}

@Component({
  selector: 'app-bmw-sales',
  templateUrl: './bmw-sales.component.html',
  styleUrls: ['./bmw-sales.component.css']
})
export class BmwSalesComponent implements OnInit {
  sales: BMW_Sale[] = [];
  sale: BMW_Sale = { model: '', year: new Date().getFullYear(), price: 0, unitsSold: 0 };
  editing: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getSales();
  }

  // ✅ Get all sales and map snake_case to camelCase
  getSales() {
    this.http.get<any[]>('http://localhost:8040/api/bmw-sales').subscribe({
      next: (data) => {
        this.sales = data.map(item => ({
          id: item.id,
          model: item.model,
          year: item.year,
          price: item.price,
          unitsSold: item.units_sold ?? item.unitsSold
        }));
      },
      error: (err) => {
        console.error('❌ Error fetching sales:', err);
      }
    });
  }

  // ✅ Add or Update Sale
  addOrUpdateSale() {
    if (this.editing && this.sale.id) {
      // Update existing record
      this.http.put(`http://localhost:8040/api/bmw-sales/${this.sale.id}`, this.sale).subscribe({
        next: () => {
          alert('✅ Sale updated successfully!');
          this.resetForm();
          this.getSales();
        },
        error: (err) => {
          console.error('❌ Error updating sale:', err);
        }
      });
    } else {
      // Add new sale
      this.http.post('http://localhost:8040/api/bmw-sales', this.sale).subscribe({
        next: () => {
          alert('✅ Sale added successfully!');
          this.resetForm();
          this.getSales();
        },
        error: (err) => {
          console.error('❌ Error adding sale:', err);
        }
      });
    }
  }

  // ✅ Edit Sale
  editSale(sale: BMW_Sale) {
    this.sale = { ...sale };
    this.editing = true;
  }

  // ✅ Delete Sale
  deleteSale(id: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.http.delete(`http://localhost:8040/api/bmw-sales/${id}`).subscribe({
        next: () => {
          alert('🗑️ Sale deleted successfully!');
          this.getSales();
        },
        error: (err) => {
          console.error('❌ Error deleting sale:', err);
        }
      });
    }
  }

  // ✅ Reset form
  resetForm() {
    this.sale = { model: '', year: new Date().getFullYear(), price: 0, unitsSold: 0 };
    this.editing = false;
  }
}
