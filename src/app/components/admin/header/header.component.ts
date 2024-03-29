import { Component } from '@angular/core';
import { SidebarHandlerService } from '../../../services/sidebar-handler.service';


@Component({
  selector: 'header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private siderbarService: SidebarHandlerService) { }

  onToggleSidebar() {
    if (window.innerWidth > 1200) {
      this.siderbarService.ToggleSidebar();
    }
    else {
      this.siderbarService.openSidebar();
    }
  }
}
