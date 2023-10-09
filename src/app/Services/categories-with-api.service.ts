import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/icategory';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriesWithApiService {

  constructor(private HttpClient: HttpClient) { }
  getAllCategories(): Observable<ICategory[]> {
    return this.HttpClient.get<ICategory[]>(`${environment.BaseApiURL}/Category`);
  }
  getCategoryByID(productID: number): Observable<ICategory> {
    return this.HttpClient.get<ICategory>(`${environment.BaseApiURL}/Category/${productID}`);
  }
}
