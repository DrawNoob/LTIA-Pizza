import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeSection: string = 'menu'; // Default active section is menu
  @Output() sectionChange = new EventEmitter<string>();

  setActiveSection(section: string) {
    this.activeSection = section;
    this.sectionChange.emit(section);
  }
}
