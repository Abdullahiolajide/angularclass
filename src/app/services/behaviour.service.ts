import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourService {

  constructor() { }
  public behaviour = new BehaviorSubject({Firstname:"Abdullahi", lastname:"Someone", email:"you@gmail.com", Phonenumber:"8393"})
}
