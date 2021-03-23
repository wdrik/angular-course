import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  favoriteSeason: string = 'table';
  seasons: string[] = ['table', 'graphic'];

  // Bar
  barChartOptions: ChartOptions = { responsive: true };
  barChartLabels: Label[] = ['2006', '2007', '2008'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [Math.floor(Math.random() * 99), Math.floor(Math.random() * 99), Math.floor(Math.random() * 99)], label: 'Series A' },
    { data: [Math.floor(Math.random() * 99), Math.floor(Math.random() * 99), Math.floor(Math.random() * 99)], label: 'Series B' }
  ];

  // Pie
  pieChartOptions: ChartOptions = {
    responsive: true,
  };
  pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  pieChartData: SingleDataSet = [300, 500, 100];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {

  }

  toggleData() {
    this.barChartData = [
      { data: [Math.floor(Math.random() * 99), Math.floor(Math.random() * 99), Math.floor(Math.random() * 99)], label: 'Series A' },
      { data: [Math.floor(Math.random() * 99), Math.floor(Math.random() * 99), Math.floor(Math.random() * 99)], label: 'Series B' }
    ];
  }
}
