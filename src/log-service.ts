import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';

@Injectable()
export class LogService {
  static globalLoggerNr: Number = 0;
  logs: Subject<String> = new Subject();
  loggerNr: Number;

  constructor() {
    this.loggerNr = LogService.globalLoggerNr++;
  }

  log(message: String) {
    setTimeout(() => {
      const formatted: String = `Logger(${this.loggerNr}): ${message}`;
      console.log(formatted);
      this.logs.next(formatted);
    }, 1000);
  }
}
