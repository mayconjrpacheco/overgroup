import { Component, OnInit } from '@angular/core';

@Component({
	selector: '<%= lowercase_name %>',
	templateUrl: './<%= lowercase_name %>.html',
	styleUrls: ['./<%= lowercase_name %>.scss']
})

export class <%= uppercase_name %>Component implements OnInit {
	
	constructor() {
	}

	public ngOnInit() {
	}
}