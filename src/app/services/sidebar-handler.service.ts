import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarHandlerService {

  sidebarExpanded = true;
  sidebarStyleChanges = new Subject<boolean>();

  sidebarOpened = false;
  sidebarOpenChanges = new Subject<boolean>();

  constructor() { }

  ToggleSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;
    this.sidebarOpened = false;
    this.sidebarStyleChanges.next(this.sidebarExpanded);
  }

  openSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
    this.sidebarExpanded = true;
    this.sidebarOpenChanges.next(this.sidebarOpened);
  }
}
