import { Component, OnInit, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import Chart from 'chart.js/auto'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cols: any = [];
  income:any = [];
  chart: any;
  allbugets: any;
  allbugets1: any;
  income0: any;
  
  expense0: any;
  expense2: any;
  myExpense: any;
  myincome: any;
  income2: any = [];
  myBalance:any;
  myValue: any;
  chartData: ChartDataset[] = [];
  chartLabels: string[] = ['Expense', 'income'];
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  chartType: ChartType = 'pie';

  constructor() { }

  ngOnInit(): void {
    this.allbugets1 = localStorage.getItem('myBugets');
    if (this.allbugets1) {
      this.allbugets = JSON.parse(this.allbugets1);
      this.myValue = this.allbugets.bugets;
    }
    //income
    this.income0 = localStorage.getItem('add-income');
    const income1 = JSON.parse(this.income0)
    if(income1 !== null &&  income1.length > 0){
    this.income2 = income1.map((x: any) => x.amount);
    this.myincome = this.income2.reduce((acc: any, cur: any) => acc + Number(cur), 0);
    this.income = income1
  }
  this.myBalance = +(this.myValue) + +(this.myincome)
  console.log('R4x my value',this.myBalance );
  // Expense
  this.expense0 = localStorage.getItem('add-Expensive');
    const expense1 = JSON.parse(this.expense0)
    if(expense1 !== null &&  expense1.length > 0){
            this.expense2 = expense1.map((x: any) => x.amount)
    this.myExpense = this.expense2.reduce((acc: any, cur: any) => acc + Number(cur), 0);
    this.income = expense1
  }
  this.myBalance = +(this.myBalance) - +(this.myExpense)
    console.log('R4x my value',this.myBalance );
    if((income1 !== null &&  income1.length > 0) && (expense1 !== null &&  expense1.length > 0)){
      this.income = income1.concat(expense1)
    }

    this.chartData.push(
      {
        data: [this.myExpense, this.myincome],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',

        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ]
      }
    )

    this.chart = new Chart('myChart', {
      type: this.chartType,
      data: {
        labels: this.chartLabels,
        datasets: this.chartData
      },
      options: this.chartOptions
    });
  }

}
