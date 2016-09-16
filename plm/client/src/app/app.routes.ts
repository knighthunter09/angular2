import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }      from './pages/dashboard';
import { ProjectsComponent }      from './pages/projects';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'project',
    component: ProjectsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
