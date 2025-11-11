import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-bmw-sales-charts',
  templateUrl: './bmw-sales-charts.component.html',
  styleUrls: ['./bmw-sales-charts.component.css']
})
export class BmwSalesChartsComponent implements OnInit, OnChanges {

  @Input() salesData: any[] = [];

  pieChartType: ChartType = 'pie';
  lineChartType: ChartType = 'line';

  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: []
  };

  lineChartData: ChartData<'line'> = {
    labels: [],
    datasets: []
  };

  pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'right' },
      title: { display: true, text: 'Sales by Model' }
    }
  };

  lineChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Units Sold by Year' }
    },
    scales: {
      x: { title: { display: true, text: 'Year' } },
      y: { title: { display: true, text: 'Units Sold' }, beginAtZero: true }
    }
  };

  ngOnInit(): void {
    this.updateCharts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['salesData']) {
      this.updateCharts();
    }
  }

  updateCharts(): void {
    if (!this.salesData || this.salesData.length === 0) return;

    // 🔍 Adjust field names to match your DB result
    // Example: { model: 'X1', year: '2021', unitsSold: 120 }
    const labels = this.salesData.map(d => d.model ?? 'Unknown');
    const values = this.salesData.map(d => d.unitsSold ?? d.units ?? 0);
    const years = this.salesData.map(d => d.year ?? '');

    // Pie chart setup
    this.pieChartData = {
      labels,
      datasets: [
        {
          label: 'Units Sold',
          data: values,
          backgroundColor: [
            '#42A5F5',
            '#66BB6A',
            '#FFA726',
            '#AB47BC',
            '#26C6DA',
            '#EC407A'
          ],
          borderWidth: 1
        }
      ]
    };

    // Line chart setup
    this.lineChartData = {
      labels: years,
      datasets: [
        {
          label: 'Units Sold',
          data: values,
          borderColor: '#42A5F5',
          backgroundColor: 'rgba(66,165,245,0.2)',
          fill: true,
          tension: 0.3,
          pointRadius: 5,
          pointHoverRadius: 7
        }
      ]
    };
  }
}
