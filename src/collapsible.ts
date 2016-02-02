import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'collapsible',
  template: `
    <h3 (click)="toggle()">Collapsible click to open</h3>
    <div [style.display]="open ? 'block' : 'none'">
      {{content}}
    </div>
  `
})
export class Collapsible {
  @Input() content: String;
  @Output() opened: EventEmitter = new EventEmitter();
  open: Boolean = false;

  toggle() {
    this.open = !this.open;

    if (this.open) {
      this.opened.next(this);
    }
  }
}