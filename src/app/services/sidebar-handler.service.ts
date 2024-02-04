import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarHandlerService {

  sidebarExpanded = true;
  sidebarStyleChanges = new Subject<boolean>();

  constructor() { }

  ToggleSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;
    console.log("service works");
    this.sidebarStyleChanges.next(this.sidebarExpanded);
  }
}
