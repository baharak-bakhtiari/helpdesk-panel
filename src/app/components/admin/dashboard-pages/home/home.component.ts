import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'home',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  // Row Data: The data to be displayed.
  rowData = [
    { "شناسه تیکت": "2513", "موضوع": "دسترسی به پورتفو", "درخواست‌کننده": "علی علوی", "تاریخ ایجاد": "23/10/1402", "اولویت": "متوسط", "وضعیت": "باز", "بازخورد": "عالی", "عملیات" :"ستاره/ اصلاح"},
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "شناسه تیکت" },
    { field: "موضوع" },
    { field: "درخواست‌کننده" },
    { field: "تاریخ ایجاد" },
    { field: "اولویت" },
    { field: "وضعیت" },
    { field: "بازخورد" },
    { field: "عملیات" },
  ];
}
