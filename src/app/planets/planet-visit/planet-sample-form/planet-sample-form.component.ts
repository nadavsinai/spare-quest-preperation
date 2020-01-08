import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {IPlanetForm} from '../../common/common.types';
import {getLoad} from '../../common/planets.service';

function createNewSampleGroup() {
  return new FormGroup({
    position: new FormControl('', {validators: [Validators.required, Validators.pattern(/\d+,\d+/)]}),
    sampleLabel: new FormControl('', {validators: [Validators.required, Validators.minLength(3)]}),
    weight: new FormControl('',)
  });
}

const sampleFormGroupValueGetter = (sample) => sample.get('weight');

function maxWeightValidator(maxLoad: number): ValidatorFn {
  return (control: FormArray) => {
    const load = getLoad(control.controls, sampleFormGroupValueGetter);
    return (load > maxLoad) ? {maxWeight: 'overWeight!!'} : null;
  }
}

@Component({
  selector: 'app-planet-sample-form',
  templateUrl: './planet-sample-form.component.html',
  styleUrls: ['./planet-sample-form.component.scss']
})
export class PlanetSampleFormComponent implements OnInit {

  @Input() maxLoad: number;

  @Output() weightChanged = new EventEmitter<number>();
  @Output() planetFormSubmit = new EventEmitter<IPlanetForm>();
  private samplesArray;
  private sampleForm: FormGroup;

  constructor() {
  }

  ngOnInit() {

    this.samplesArray = new FormArray(
      [createNewSampleGroup()], [maxWeightValidator(this.maxLoad)]
    );

    this.sampleForm = new FormGroup({
      astronautName: new FormControl(''),
      date: new FormControl(new Date()),
      samples: this.samplesArray
    });


  }

  submit() {
    console.log(this.sampleForm.value);
    this.planetFormSubmit.emit(this.sampleForm.value);
  }

  addSample() {
    this.samplesArray.push(createNewSampleGroup());
  }

  removeSample(index: number) {
    this.samplesArray.removeAt(index);
    this.weightChangedHandler();
  }

  getWeight(sample: FormGroup) {
    let number = Math.random() * 100;
    sample.patchValue({weight: number.toFixed(2)});
    this.weightChangedHandler();
  }

  weightChangedHandler() {
    const currentWeight = getLoad((this.sampleForm.get('samples') as FormArray).controls, sampleFormGroupValueGetter);
    if (!isNaN(currentWeight)) {
      this.weightChanged.emit(currentWeight);
    }
  }
}
