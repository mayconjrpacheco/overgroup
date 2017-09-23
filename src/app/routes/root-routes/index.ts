import { Routes } from '@angular/router';
import { ACCESS_ROUTES } from '../access-routes';
import { MAIN_ROUTES } from '../main-routes';

export const ROOT_ROUTES: Routes = [
	...ACCESS_ROUTES,
	...MAIN_ROUTES
];