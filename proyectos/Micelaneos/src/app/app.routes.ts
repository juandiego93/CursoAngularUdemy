import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'user', component: UsuarioComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' },
]


export const APP_ROUTING = RouterModule.forRoot(routes)