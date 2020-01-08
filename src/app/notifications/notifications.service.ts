import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StopCallback} from '@algotec/spaceship-parts';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notificationsSubject = new Subject<string>();
  notifications$ = this.notificationsSubject.asObservable();

  constructor() {
  }

  notify(text: string): StopCallback {
    this.notificationsSubject.next(text);
    return () => {
      this.notificationsSubject.next('');
      return null;
    }
  }
}
