import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarHandlerService {

  sidebarStyleChanges = new Subject<void>();
  sidebarOpenChanges = new Subject<void>();

  constructor() { }

  ToggleSidebar() {
    this.sidebarStyleChanges.next();
  }

  openSidebar() {
    this.sidebarOpenChanges.next();
  }
}
