import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from '../auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	animations: [
		trigger('changeState', [
			state('isOpen', style({
				backgroundColor: 'red'
			}))
		])
	]
})
export class HeaderComponent implements OnInit {

	opened: boolean = false;
	isOpen: boolean = false;

	constructor(private authService: AuthService) {}

	ngOnInit() {
	}

}
