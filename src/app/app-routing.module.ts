import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { LoginService } from './core/services/login.service';
import { AddComponent } from './employee/add/add.component';
import { CreateUserCanDeactivateGuardService } from './employee/service/create-user-candeactivate-guard.service';


// import { EditComponent } from './employee/edit/edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [

  // {path:"emplist",component:EmployeeComponent},
  // {path:"editemp",component:EditComponent},  //optional param
  {path:"dashboard",component:DashboardComponent},  //optional param
  {path:"addemp",component:AddComponent,
  canDeactivate: [CreateUserCanDeactivateGuardService]
},  //





  // {path:"logout",component:EmployeeComponent},
  {path:"",redirectTo:"addemp",pathMatch:'full'},
  // {path:"",redirectTo:"editemp",pathMatch:'full'},
  {path:"**",component:AddComponent},
];


@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes,{
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
