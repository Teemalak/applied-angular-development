import { Routes } from '@angular/router';
import { Counter } from './counter';
import { OverviewPage } from './pages/overview';
import { PrefsPage } from './pages/prefs';

export const CounterRoutes: Routes = [
  {
    path: '',
    component: Counter,
    data: { area: { label: 'Area Title' } },
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
