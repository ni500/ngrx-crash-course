import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RotService {

  rotBanana(): Observable<any> {
    console.log('ROOT BANANA');
    const milliseconds = 3000; // 3 secs
    return Observable.create(observer => {
      setTimeout(() => {
        console.log('Doone waiting');
        observer.next('brown');
        observer.complete();
      }, milliseconds);
    });
  }
}