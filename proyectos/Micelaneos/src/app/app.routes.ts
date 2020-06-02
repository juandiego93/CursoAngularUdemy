import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ROUTES } from './components/usuario/usuario.routes';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{
		path: 'user', component: UsuarioComponent,
		children: ROUTES
	},
	{ path: '**', pathMatch: 'full', redirectTo: 'user' },
]


export const APP_ROUTING = RouterModule.forRoot(routes)