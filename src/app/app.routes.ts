import { Routes } from '@angular/router';
import { CreacuenComponent } from './creacuen/creacuen.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'crear-cuenta', component: CreacuenComponent }
];
