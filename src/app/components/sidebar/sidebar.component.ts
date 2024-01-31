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
    { label: "داشبورد", path: "", children: [], icon: "", active: true },
    { label: "محصولات", path: "", children: [], icon: "", active: true },
    { label: "فروش", path: "", children: [], icon: "", active: true },
    { label: "تخفیفات", path: "", children: [], icon: "", active: true },
    { label: "آنالیزها", path: "", children: [], icon: "", active: true },
  ]

}
