import { Routes } from '@angular/router';
import { MainComponent } from '@modules/main/main';
import { HomeComponent } from '@modules/main/home/home';

export const MAIN_ROUTES: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{
				path: '',
				component: HomeComponent
			}
		]
	}
];