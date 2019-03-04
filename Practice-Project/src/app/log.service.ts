import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  writeLog(logText) {
    console.log(logText);
  }
}
