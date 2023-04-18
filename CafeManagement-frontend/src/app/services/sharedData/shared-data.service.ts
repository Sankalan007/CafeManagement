import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import User from 'src/app/model/User';

@Injectable({
  providedIn: 'root',
})
export class ShareddataService {
  constructor() {}

  private userDetailsSetSource = new Subject<boolean>();
  userDetailsSet$ = this.userDetailsSetSource.asObservable();
  private userDetailsSubject = new BehaviorSubject<any>(
    JSON.parse(localStorage.getItem('userDetails') as string)
  );
  public userDetailsObservable = this.userDetailsSubject.asObservable();

  setUserDetails(userDetails: any): void {
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    this.userDetailsSubject.next(userDetails);
    this.userDetailsSetSource.next(true);
  }

  userRoleSet$ = this.userDetailsSetSource.asObservable();
  private userRoleSubject = new BehaviorSubject<any>(
    JSON.parse(localStorage.getItem('role') as string)
  );
  public userRoleObservable = this.userDetailsSubject.asObservable();

  setUserRole(userDetails: any): void {
    localStorage.setItem('role', JSON.stringify(userDetails));
    this.userDetailsSubject.next(userDetails);
    this.userDetailsSetSource.next(true);
  }
}
