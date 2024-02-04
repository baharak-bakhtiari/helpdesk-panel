import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from '../../infrastructure/typings';
import { SidebarHandlerService } from '../../services/sidebar-handler.service';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  screenWidth!: number;

  sidebarExpanded: boolean = true;
  toggleSubscription!: Subscription;

  sidebarOpened = false;
  openSubscription!: Subscription;

  menuItems: MenuItem[] = [
    { label: "داشبورد", path: "", children: [], icon: "bi bi-columns", active: true, },
    { label: "محصولات", path: "", children: [], icon: "bi bi-box-seam", active: true },
    { label: "مشتریان", path: "", children: [], icon: "bi bi-people", active: true },
    { label: "سفارشات", path: "", children: [], icon: "bi bi-card-checklist", active: true },
    { label: "تخفیفات", path: "", children: [], icon: "bi bi-percent", active: true },
    { label: "آنالیزها", path: "", children: [], icon: "bi bi-graph-up", active: true },
    { label: "موجودی انبار", path: "", children: [], icon: "bi bi-building-check", active: true },
  ]

  constructor(private sidebarService: SidebarHandlerService) {

  }

  ngOnInit(): void {
    this.toggleSubscription = this.sidebarService.sidebarStyleChanges.subscribe((sidebarStyle: boolean) => {
      this.sidebarExpanded = sidebarStyle;
      this.screenWidth = window.innerWidth;
      console.log(this.screenWidth);
    });

    this.openSubscription = this.sidebarService.sidebarOpenChanges.subscribe((sidebarOpen: boolean) => {
      this.sidebarOpened = sidebarOpen;
      this.screenWidth = window.innerWidth;
      console.log(this.screenWidth);
    });
  }

  ngOnDestroy(): void {
    this.toggleSubscription.unsubscribe();
    this.openSubscription.unsubscribe();
  }
}
