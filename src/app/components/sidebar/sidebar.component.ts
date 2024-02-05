import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
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
export class SidebarComponent implements OnInit, OnDestroy {

  sidebarExpanded = true;
  sidebarOpened = false;
  screenWidth!: number;
  toggleSubscription!: Subscription;
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

  constructor(private sidebarService: SidebarHandlerService) { }

  ngOnInit(): void {
    this.toggleSubscription = this.sidebarService.sidebarStyleChanges.subscribe(() => {
      this.sidebarOpened = false;
      this.sidebarExpanded = !this.sidebarExpanded;
      this.screenWidth = window.innerWidth;
    });

    this.openSubscription = this.sidebarService.sidebarOpenChanges.subscribe(() => {
      this.sidebarExpanded = true;
      this.sidebarOpened = !this.sidebarOpened;
      this.screenWidth = window.innerWidth;
    });
  }

  ngOnDestroy(): void {
    this.toggleSubscription.unsubscribe();
    this.openSubscription.unsubscribe();
  }
}
