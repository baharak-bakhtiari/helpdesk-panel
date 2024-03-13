import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuItem } from '../../../infrastructure/typings';
import { SidebarHandlerService } from '../../../services/sidebar-handler.service';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit, OnDestroy {

  sidebarExpanded = true;
  sidebarOpened = false;
  hasOverlay = false;
  screenWidth!: number;
  toggleSubscription!: Subscription;
  openSubscription!: Subscription;

  menuItems: MenuItem[] = [
    { label: "صفحه اصلی", path: "", children: [], icon: "bi bi-columns", active: true, },
    { label: "تیکت‌ جدید", path: "products", children: [], icon: "bi bi-box-seam", active: false },
    { label: "مدیریت تیکت‌ها", path: "analysis", children: [], icon: "bi bi-graph-up", active: false },
    { label: "مشتریان", path: "consumers", children: [], icon: "bi bi-people", active: false },
    { label: "تیم پشتیبانی", path: "orders", children: [], icon: "bi bi-card-checklist", active: false },
    { label: "گزارش‌ها", path: "discounts", children: [], icon: "bi bi-percent", active: false },
    { label: "ادمین", path: "inventory", children: [], icon: "bi bi-building-check", active: false },
  ]

  constructor(private sidebarService: SidebarHandlerService) { }

  ngOnInit(): void {
    //Shrink sidebar width (just large screens)
    this.toggleSubscription = this.sidebarService.sidebarStyleChanges.subscribe(() => {
      this.sidebarOpened = false;
      this.sidebarExpanded = !this.sidebarExpanded;
      this.screenWidth = window.innerWidth;
    });

    //Open sidebar (just small screens)
    this.openSubscription = this.sidebarService.sidebarOpenChanges.subscribe(() => {
      this.sidebarExpanded = true;
      this.sidebarOpened = true;
      this.hasOverlay = true;
      this.screenWidth = window.innerWidth;
    });
  }

  //Close sidebar on click outside (just small screens)
  closeSidebar() {
    this.sidebarOpened = false;
    this.hasOverlay = false;
  }

  ngOnDestroy(): void {
    this.toggleSubscription.unsubscribe();
    this.openSubscription.unsubscribe();
  }
}
