import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

function createNewSampleGroup() {
  return new FormGroup({
    position: new FormControl('', {validators: [Validators.required, Validators.pattern(/\d+,\d+/)]}),
    sampleLabel: new FormControl('', {validators: [Validators.required, Validators.minLength(3)]}),
    weight: new FormControl('',)
  });
}

@Component({
  selector: 'app-planet-sample-form',
  templateUrl: './planet-sample-form.component.html',
  styleUrls: ['./planet-sample-form.component.scss']
})
export class PlanetSampleFormComponent implements OnInit {

  @Input() maxLoad: number;

  private samplesArray = new FormArray(
    [createNewSampleGroup()]
  );

  sampleForm = new FormGroup({
    astronautName: new FormControl(''),
    date: new FormControl(new Date()),
    samples: this.samplesArray
  });


  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.sampleForm.value);
  }

  addSample() {
    this.samplesArray.push(createNewSampleGroup());
  }

  removeSample(index: number) {
    this.samplesArray.removeAt(index);
  }

  getWeight(sample: FormControl) {
    sample.setValue(Math.random() * 50);
  }
}
