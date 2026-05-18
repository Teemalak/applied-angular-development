import { Component, computed, signal } from '@angular/core';
import { PageHeader } from '../../../shared/ui-page-header/page-header';
import { FizzBuzz } from '../../ui-counter/fizz-buzz';

@Component({
  selector: 'app-counter-page',
  imports: [PageHeader, FizzBuzz],
  template: `
    <app-page-header title="Counter Overview" description="The Counter" />
    <div class="prose max-w-none">
      <p>Is Even {{ isEven() }}</p>
      <div>
        <button (click)="decrement()" class="btn btn-primary">-</button>
        <span class="p-2 text-lg">{{ current() }}</span>
        <button (click)="increment()" class="btn btn-primary">+</button>
      </div>
      <div>
        <button [disabled]="current() === 0" (click)="current.set(0)" class="btn btn-primary">
          Reset
        </button>
      </div>
      <app-counter-fizzbuzz [current]="current()" />
    </div>
  `,
  styles: ``,
})
export class OverviewPage {
  current = signal(0);

  isEven = computed(() => this.current() % 2 === 0);

  decrement() {
    // this.current.set(this.current() - 1);
    this.current.update((c) => c - 1);
  }

  increment() {
    // this.current.set(this.current() + 1);
    this.current.update((c) => c + 1);
  }

  // Fizzbuzz - if current is equally divisible by 3 it is 'fizz', 5 is 'buzz', 3 & 5 'fizzbuzz', otherwise, nothing.
}
