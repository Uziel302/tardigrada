import { Injectable } from '@angular/core';
import { ILecture } from '../models/lecture';


@Injectable({ providedIn: 'root' })
export class AdminDataService {
  public lectures: ILecture[] = [];
}