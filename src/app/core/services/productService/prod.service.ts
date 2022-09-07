import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, ReplaySubject,catchError,throwError } from 'rxjs';
// import { EmpData } from '../../models/users.model'

import { ProductData } from '../../models/product.model';
//If we want to use the data accross multiple components and the logic then we 
// need to provide that information in the service and we can reuse it.
// It is used to inject the other service dependencies into the service.
// IN this case it does not have any dependency so the parameter list is empty
@Injectable()
export class ProductService {


    productsArray: ProductData[] = [];

    // employeeURL: string = 'api/employees1'; //this will create an error
    prodURL: string = 'api/products'; //this will work out
    constructor(private _http: HttpClient) {

    }
   
 
    getProductsByApi(): Observable<ProductData[]> {
        // console.log(this._http.get<EmpData[]>(this.employeeURL));
        return this._http.get<ProductData[]>(this.prodURL)
        .pipe(catchError(this.handleError));
    }


    private handleError(errorResponse:HttpErrorResponse){
        console.log(errorResponse);
       // console.log(errorResponse.status);
       // console.log(errorResponse.url);
       if(errorResponse.error  instanceof ErrorEvent)
       {
           console.log(errorResponse.message);
           // Client side error
       }
       else
       {
           console.log(errorResponse.message);
           // server side
       }
       //return new ErrorObservable('')
     return throwError(()=>{
       return 'Something wrong occur!!';
     });
     

   }

    returnProductsArray() {
        this.getProductsByApi().subscribe((empdata) => {
            console.log(empdata)
            this.productsArray = empdata;
        })
        return this.productsArray;
    }

   

    getName(name: string): string {
        return "Mr. " + name;
    }
   


    temp: any = {}
    //for edit 

    getProdById(id: any) {
        let subject = new ReplaySubject();
        this._http.get<ProductData[]>(this.prodURL).subscribe((data) => {
            data.map(item => {
                    if (item.code == id) {
                        console.log(item);
                        this.temp = item;
                    }
    
                })
                subject.next(this.temp);
            subject.complete();
        });
        return subject
    }

  

}