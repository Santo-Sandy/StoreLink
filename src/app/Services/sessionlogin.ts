import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Sessionlogin {

  static session=signal(false);
}
