import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { AuthService } from '../../auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	private loginForm: FormGroup;

	constructor(private authService: AuthService) { }

	ngOnInit() {
		this._createForm();
	}

	private _createForm() {
		this.loginForm = new FormGroup({
			email: new FormControl(null),
			password: new FormControl(null)
		})
	}

	login() {
		// console.log(this.loginForm.value.email, this.loginForm.value.password)
		this.authService.login( this.loginForm.value.email, this.loginForm.value.password );
		this.loginForm.reset();
	}

}
