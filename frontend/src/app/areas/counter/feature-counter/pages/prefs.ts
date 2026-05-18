import { Component, signal } from '@angular/core';
import { PageHeader } from '../../../shared/ui-page-header/page-header';

@Component({
  selector: 'app-counter-prefs',
  imports: [PageHeader],
  template: `
    <app-page-header title="Preferences" description="Set Preferences For the Counter" />
    <div class="prose max-w-none">
      <div class="join">
        <button [disabled]="by() === 1" (click)="by.set(1)" class="btn join-item">1</button>
        <button [disabled]="by() === 3" (click)="by.set(3)" class="btn join-item">3</button>
        <button [disabled]="by() === 5" (click)="by.set(5)" class="btn join-item">5</button>
      </div>
    </div>
  `,
  styles: ``,
})
export class PrefsPage {
  by = signal<1 | 3 | 5>(1);
}
