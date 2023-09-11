import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  category:any =[];
  amountData:any =[];
  categories:any=['Food','Fule','lightBill','Travilng','Movies'];
  ngOnInit() {
    const categoryData:any = localStorage.getItem('add-Expensive'); 
    const categoriesJson:[] = JSON.parse(categoryData)
   
  const result = categoriesJson.reduce((acc:any, obj:any):any => {
    acc[obj.selectedcategories] = (acc[obj.selectedcategories] || 0) + obj.amount;
    return acc;
  }, {});
  console.log('result',result);
  
  }
}
