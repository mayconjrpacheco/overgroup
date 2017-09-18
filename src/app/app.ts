import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	<header>
	
  	</header>
  	<main>
  		<router-outlet></router-outlet>
  	</main>
  `,
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'app';
}
