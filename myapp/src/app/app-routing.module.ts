import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UpdateformComponent } from './updateform/updateform.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component:LoginComponent  },
  { path: 'admin', component:AdminComponent  },
    { path: 'edit-user/:id', component:UpdateformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

