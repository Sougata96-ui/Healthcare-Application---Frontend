import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'patient/login',
    pathMatch: 'full'
  },
  {
    path: 'patient',
    loadChildren: () =>
      import('./components/public/patient/patient-module')
        .then(m => m.PatientModule)
  }
];
