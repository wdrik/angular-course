import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

import { HomeService } from './home.service';

interface ICoin {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

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
  displayedColumns: string[] = ['rank', 'name', 'price'];
  coins: ICoin[] = [];

  constructor(private homeService: HomeService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.homeService.read().subscribe(coins => {
      this.coins = coins.data.filter((val, i) => i < 10);

      console.log(coins);
    })
  }

  // toggleData() {
  //   this.barChartData = [
  //     { data: [Math.floor(Math.random() * 99), Math.floor(Math.random() * 99), Math.floor(Math.random() * 99)], label: 'Series A' },
  //     { data: [Math.floor(Math.random() * 99), Math.floor(Math.random() * 99), Math.floor(Math.random() * 99)], label: 'Series B' }
  //   ];
  // }
}
