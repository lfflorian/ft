import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Strengths } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ShareSkillService {

  private messageSource = new BehaviorSubject<Strengths>(undefined);
  currentSkill = this.messageSource.asObservable();

  constructor() { }

  shareSkill(skill: Strengths) {
    this.messageSource.next(skill)
  }
}
