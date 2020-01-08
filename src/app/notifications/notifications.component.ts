import {Component, OnInit} from '@angular/core';
import {NotificationsService} from './notifications.service';

@Component({
  selector: 'app-notifications',
  template: `
    <p *ngIf="notifications$|async as notification">{{notification}}</p>
  `,
  styles: [`
    :host {
      display: inline-block;
      width: 36vw;
      text-align: left;
      font-size: 0.5rem;
      animation: blink 1s step-end infinite;
    }

    @keyframes blink {
      67% {
        opacity: 0
      }
    }
  `

  ]
})
export class NotificationsComponent implements OnInit {
  notifications$ = this.notificationService.notifications$;

  constructor(private  notificationService: NotificationsService) {
  }

  ngOnInit() {
  }

}
