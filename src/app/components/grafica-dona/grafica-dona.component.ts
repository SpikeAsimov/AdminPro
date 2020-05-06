import {Component, Input, OnInit} from '@angular/core';
import {Label, SingleDataSet} from "ng2-charts";
import {ChartType} from "chart.js";

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {


  // Doughnut
  @Input('donaLabel') public doughnutChartLabels: Label[] ;
  @Input('donaData') public doughnutChartData: SingleDataSet ;
  @Input('donaType') public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }
}
