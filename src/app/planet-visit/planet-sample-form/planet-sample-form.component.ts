import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-planet-sample-form',
  templateUrl: './planet-sample-form.component.html',
  styleUrls: ['./planet-sample-form.component.scss']
})
export class PlanetSampleFormComponent implements OnInit {
  sampleForm = new FormGroup({
    astronautName: new FormControl('')
  });

  constructor() {
  }

  ngOnInit() {
  }

}
