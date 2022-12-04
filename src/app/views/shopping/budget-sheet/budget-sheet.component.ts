import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-sheet',
  templateUrl: './budget-sheet.component.html',
  styleUrls: ['./budget-sheet.component.css']
})
export class BudgetSheetComponent implements OnInit {

  products = [
    {
      description: 'Product 1',
      unit_price: '15',
      quantity: '10',
      discount: '0',
      taxable_income: '0'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
