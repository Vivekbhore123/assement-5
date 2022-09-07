import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { EmployeeComponent } from './employee.component';
// import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatRadioModule} from '@angular/material/radio';


import {MatTableModule} from '@angular/material/table';
import { SelectAgeValidator } from '../shared/directives/directive.ageValidate';
import { SelectPinValidator } from '../shared/directives/directive.pinValidate';
import { SelectValidator } from '../shared/directives/directive.validator';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
// import { DialogElementsExampleDialog } from './edit/dialogelement/dialogelement';
import { DialogElementsExampleDialog } from './add/dialogelement/dialogelement';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AddComponent } from './add/add.component';
import { CreateUserCanDeactivateGuardService } from './service/create-user-candeactivate-guard.service';
@NgModule({
  declarations: [
    // EmployeeComponent,
    
    // EditComponent,
    AddComponent,
    
    SelectAgeValidator,
    SelectPinValidator,
    SelectValidator,
    // DialogElementsExampleDialog
    DialogElementsExampleDialog
    
    ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    RouterModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  exports:[AddComponent],
  providers:[CreateUserCanDeactivateGuardService]
})
export class EmployeeModule { }
