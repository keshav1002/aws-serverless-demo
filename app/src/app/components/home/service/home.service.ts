import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  addTwoNumbers(firstNumber: number, secondNumber: number) {
    return this.http
      .post(
        `${environment.baseUrl}/calculator/add`,
        { firstNumber, secondNumber },
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
        }
      )
      .toPromise();
  }
}
