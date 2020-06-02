import { Routes } from '@angular/router'; 
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario-editar.component';

export const ROUTES: Routes = [
	{ path: 'nuevo', component: UsuarioNuevoComponent },
	{ path: 'detalle', component: UsuarioDetalleComponent },
	{ path: 'editar', component: UsuarioEditarComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'user' },
]