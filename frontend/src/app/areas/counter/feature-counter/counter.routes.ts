import { Routes } from '@angular/router';
import { Counter } from './counter';
import { OverviewPage } from './pages/overview';
import { PrefsPage } from './pages/prefs';
import { counterStore } from '../data-counter/store';

export const CounterRoutes: Routes = [
  {
    path: '',
    component: Counter,
    data: { area: { label: 'Area Title' } },
    providers: [counterStore], // when I enter this route, the first place it gets injected, create an instance. (created "lazy")
    children: [
      {
        path: '',
        component: OverviewPage,
        data: { nav: { label: 'Overview' } },
      },
      {
        path: 'prefs',
        component: PrefsPage,
        data: { nav: { label: 'Preferences' } },
      },
    ],
  },
];
