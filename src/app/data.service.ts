import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  constructor() { }
  
  private goals = new BehaviorSubject<any>(['Tee main goal', 'Everyday life goal']);
  goal = this.goals.asObservable();

  changeGoal(goal){
    this.goals.next(goal);
  }
}
