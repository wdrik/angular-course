import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


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
  barChartLabels: Label[] = ['2019', '2020', '2021'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [Math.floor(Math.random() * 99), Math.floor(Math.random() * 99), Math.floor(Math.random() * 99)], label: 'Series A' },
    { data: [Math.floor(Math.random() * 99), Math.floor(Math.random() * 99), Math.floor(Math.random() * 99)], label: 'Series B' }
  ];

  // Pie
  pieChartOptions: ChartOptions = { responsive: true };
  pieChartLabels: Label[] = ['Download', 'Store', 'Sales'];
  pieChartData: SingleDataSet = [300, 500, 100];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];

  // Table
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {

  }

  // toggleData() {
  //   this.barChartData = [
  //     { data: [Math.floor(Math.random() * 99), Math.floor(Math.random() * 99), Math.floor(Math.random() * 99)], label: 'Series A' },
  //     { data: [Math.floor(Math.random() * 99), Math.floor(Math.random() * 99), Math.floor(Math.random() * 99)], label: 'Series B' }
  //   ];
  // }
}
