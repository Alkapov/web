import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  activeModal: string = null;
  closeModal() {
    this.activeModal = null;
  }
  showModal(name: string) {
    this.activeModal = name;
  }
  isModalActive(name: string): boolean {
    return this.activeModal === name;
  }
}

