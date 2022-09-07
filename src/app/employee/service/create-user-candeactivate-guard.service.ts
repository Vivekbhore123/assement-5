import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
// import { AddComponent } from "../add/add.component";
import { AddComponent } from "../add/add.component";

 
@Injectable()
export class CreateUserCanDeactivateGuardService implements
 CanDeactivate<AddComponent> {
    constructor(){}
    canDeactivate(component: AddComponent):boolean{
       if(component.createUserForm.dirty)
       {
        return confirm('Are you sure you want to discard your changes?.')
       }
       else
       return true;
    }

}