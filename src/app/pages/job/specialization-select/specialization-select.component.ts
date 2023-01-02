import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { map, mapTo, Observable } from 'rxjs';
import { Specialization } from 'src/app/interfaces/specialization';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'specialization-select',
  templateUrl: 'specialization-select.component.html',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SpecializationSelectComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SpecializationSelectComponent implements OnInit, ControlValueAccessor {

  @Input() jobId!: string;

  options$!: Observable<Specialization[]>;

  constructor(
    private as: APIService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.options$ = this.as.specializations$
      .pipe(
        map((data) => {
          return data.filter((s) => {
            return s.related_job === this.jobId;
          })
        })
      );
  }
  onChange: any = () => { }
  onTouch: any = () => { }
  val = ""; // this is the updated value that the class accesses
  set value(val: string) {  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val;
    this.onChange(val)
    this.onTouch(val)

  }
  // this method sets the value programmatically
  writeValue(value: string) {
    this.value = value;
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn
  }
}
