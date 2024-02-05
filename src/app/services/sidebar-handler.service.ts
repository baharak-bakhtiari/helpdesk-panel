import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarHandlerService {

  sidebarStyleChanges = new Subject<void>();
  sidebarOpenChanges = new Subject<void>();

  constructor() { }

  //To shrink sidebar (just for large screens)
  ToggleSidebar() {
    this.sidebarStyleChanges.next();
  }

  //To open sidebar (just for small screens)
  openSidebar() {
    this.sidebarOpenChanges.next();
  }
}
