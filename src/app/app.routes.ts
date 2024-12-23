import { Routes } from '@angular/router';
import { MentorsProfileComponent } from './page/mentors-profile/mentors-profile.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => {
      return import('./page/page.component').then((m) => m.PageComponent)
    },
    children: [
      { path: '', component: MentorsProfileComponent }
    ]
  }
];
