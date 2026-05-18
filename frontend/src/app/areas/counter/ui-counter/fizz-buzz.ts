import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-counter-fizzbuzz',
  imports: [],
  template: `
    <div>
      @switch (fizzBuzz()) {
        @case ('FizzBuzz') {
          <p class="alert alert-info">This is FizzBuzz</p>
        }
        @case ('Fizz') {
          <p class="alert alert-success">Fizzing!</p>
        }
        @case ('Buzz') {
          <p class="alert alert-error">Buzzing!</p>
        }
        @case (undefined) {
          <p>Just not fizzing or buzzing here. Keep Going</p>
        }
      }
    </div>
  `,
  styles: ``,
})
export class FizzBuzz {
  current = input.required<number>();
  fizzBuzz = computed(() => {
    const current = this.current();
    if (current === 0) {
      return;
    }
    if (current % 3 === 0 && current % 5 === 0) {
      return 'FizzBuzz';
    }
    if (current % 3 === 0) {
      return 'Fizz';
    }
    if (current % 5 === 0) {
      return 'Buzz';
    }
    return;
  });
}
