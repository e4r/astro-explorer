import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DeducePlanetPipe } from 'src/app/pipes/deduce-planet.pipe';
import { PlanetComponent } from 'src/app/ui/planet/planet.component';

import { JobPageComponent } from './job-page.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeduceSignPipe } from 'src/app/pipes/deduce-sign.pipe';
import { SpecializationSelectComponent } from './specialization-select/specialization-select.component';
import { DeduceSpecializationPipe } from 'src/app/pipes/deduce-specialization.pipe';
import { NiftySignComponent } from 'src/app/ui/nifty-sign/nifty-sign.component';

@NgModule({
  imports: [
    CommonModule,
    PlanetComponent,
    FormsModule,
    NiftySignComponent,
    DeduceSpecializationPipe,
    ReactiveFormsModule,
    DeducePlanetPipe,
    DeduceSignPipe,
    IonicModule,
    SpecializationSelectComponent,
    HighchartsChartModule,
    RouterModule.forChild([{
      path: '',
      component: JobPageComponent
    }])
  ],
  exports: [],
  declarations: [JobPageComponent],
  providers: [],
})
export class JobPageModule { }
