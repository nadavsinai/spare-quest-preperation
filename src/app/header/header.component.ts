import {Component, HostBinding, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  showBlackBg: boolean = false;

  @HostListener('window:scroll') onScrollEvent(event: Event) {
    this.showBlackBg = (window.scrollY > 120)
  }

  ngOnInit() {
  }

}
