import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassEmailService {

private emailSource = new BehaviorSubject<string>('no email');
currentEmail = this.emailSource.asObservable();
  constructor() { }

changeEmail(email: string) {
  this.emailSource.next(email);
}

}
