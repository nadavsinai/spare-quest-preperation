import {Component, Input, OnInit} from '@angular/core';
import {ISpaceship} from '@algotec/spaceship-parts';
import set = Reflect.set;

@Component({
  selector: 'app-my-ships',
  templateUrl: './my-ships.component.html',
  styleUrls: ['./my-ships.component.scss']
})
export class MyShipsComponent implements OnInit {
  @Input() ships: { [key: string]: ISpaceship };

  constructor() {
  }

  ngOnInit() {
  }

  spaceShipDragStart($event: DragEvent, shipId: string) {

    $event.dataTransfer.dropEffect = "move";
    $event.dataTransfer.setData("text/plain", shipId);
    requestAnimationFrame(() => {
      ($event.target as HTMLElement).hidden = true;
    });

  }

  spaceShipDragEnd($event: DragEvent) {
    requestAnimationFrame(() => {
      ($event.target as HTMLElement).hidden = false;
    });
  }
}
