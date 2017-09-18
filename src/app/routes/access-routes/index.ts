import { Routes } from '@angular/router';
import { AccessComponent } from '@modules/access/access';
import { SigninComponent } from '@modules/access/signin/signin';
import { SignupComponent } from '@modules/access/signup/signup';

export const ACCESS_ROUTES: Routes = [
	{
		path: '',
		component: AccessComponent,
		children: [
			{
				path: 'signin',
				component: SigninComponent
			},
			{
				path: 'signup',
				component: SignupComponent
			}
		]

	}
];