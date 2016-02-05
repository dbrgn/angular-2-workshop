import {Component, ChangeDetectionStrategy, Input, Inject, ChangeDetectorRef} from '@angular/core';
import {ListItem} from './list-item';

@Component({
  selector: 'list',
  template: `
    <ul>
      <li *ngFor="let item of list">
        <list-item [item]="item"></list-item>
      </li>
    </ul>
  `,
  directives: [ListItem],
  changeDetection: ChangeDetectionStrategy.Detached
})
export class List {
  @Input() list: Array<String>;
  previousLength: Number = 0;
  changeDetectorRef: changeDetectorRef;

  constructor(@Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
  }

  ngDoCheck() {
    if (this.list.length !== this.previousLength) {
      console.log('List Do Check: Detected change');
      this.changeDetectorRef.markForCheck();
      this.previousLength = this.list.length;
    } else {
      console.log('List Do Check: No change');
    }
  }
}
