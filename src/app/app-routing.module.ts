import { AddVeiculoComponent } from './components/add-veiculo/add-veiculo.component';
import { VeiculosListComponent } from './components/veiculos-list/veiculos-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VeiculoDetailsComponent } from './components/veiculo-details/veiculo-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'veiculo', component: VeiculosListComponent },
  { path: 'veiculo/:id', component: VeiculoDetailsComponent },
  { path: 'add', component: AddVeiculoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
