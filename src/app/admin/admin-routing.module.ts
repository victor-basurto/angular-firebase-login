import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
	path: 'admin',
	component: ProjectComponent,
	children: [{
		path:  'list',
		component:  ProjectListComponent
	}, {
		path:  'create',
		component:  ProjectCreateComponent
	}, {
		path:  'update',
		component:  ProjectUpdateComponent
	}, {
		path: 'login',
		component: LoginComponent
	}]
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class AdminRoutingModule {}