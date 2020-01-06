import {Injectable} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class LocalstorageService {
  private localStorageSubject = new BehaviorSubject(this.localStore);

  setItem(key: string, item: any) { // would cause item.toString();
    this.localStore.setItem(key, item);
    this.updateState();
  }

  getItem(key: string) {
    return this.localStore.getItem(key);
  }

  asObservable() {
    return this.localStorageSubject.asObservable().pipe(map((v) => JSON.parse(v as any)));
  }

  clear() {
    this.localStore.clear();
    this.updateState();
  }

  private updateState() {
    this.localStorageSubject.next(this.localStore)
  }

  constructor(private localStore = localStorage) {
  }


}
