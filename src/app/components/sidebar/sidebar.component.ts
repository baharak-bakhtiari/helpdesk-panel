import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from '../../infrastructure/typings';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  menuItems: MenuItem[] = [
    { label: "داشبورد", path: "", children: [], icon: "bi bi-columns", active: true, },
    { label: "محصولات", path: "", children: [], icon: "bi bi-box-seam", active: true },
    { label: "مشتریان", path: "", children: [], icon: "bi bi-people", active: true },
    { label: "سفارشات", path: "", children: [], icon: "bi bi-card-checklist", active: true },
    { label: "تخفیفات", path: "", children: [], icon: "bi bi-percent", active: true },
    { label: "آنالیزها", path: "", children: [], icon: "bi bi-graph-up", active: true },
    { label: "موجودی انبار", path: "", children: [], icon: "bi bi-building-check", active: true },
  ]

}
