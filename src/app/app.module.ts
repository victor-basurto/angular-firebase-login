import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import {
	MatInputModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,
	MatIconModule,
	MatButtonModule,
	MatFormFieldModule,
	MatSidenavModule
} from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

// admin components
import { AdminModule } from './admin/admin.module';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


// firebase config
// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: environment.apiKey,
	authDomain: environment.authDomain,
	databaseURL: environment.databaseURL,
	projectId: environment.projectId,
	storageBucket: "",
	messagingSenderId: environment.messagingSenderId,
	appId: environment.appId
};

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		AboutComponent,
		ContactComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		RouterModule,
		AppRoutingModule,
		MatInputModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatSortModule,
		MatTableModule,
		MatIconModule,
		MatCheckboxModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatSidenavModule,
		MatToolbarModule,
		MatListModule,
		AngularFireModule.initializeApp( firebaseConfig ),
		AngularFireAuthModule,
		AdminModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
