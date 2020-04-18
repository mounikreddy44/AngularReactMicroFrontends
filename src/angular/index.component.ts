import { Component, ChangeDetectorRef, Inject } from '@angular/core'
import e from '../event-bus'

@Component({
  selector: 'AngularApp',
  template: `
		<div style="margin-top: 100px;" *ngIf="display">
      <h1>Home page in Angular</h1>
		</div>
	`,
})
export default class AngularApp {
  display: boolean = false;
  constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef) {}

  ngAfterContentInit() {
    e.on('message', message => {
      this.display =true;
      this.changeDetector.detectChanges()
    })
  }
}
