import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DeducePlanetPipe } from 'src/app/pipes/deduce-planet.pipe';
import { PlanetComponent } from 'src/app/ui/planet/planet.component';

import { JobsPageComponent } from './jobs-page.component';

@NgModule({
  imports: [
    CommonModule,
    PlanetComponent,
    DeducePlanetPipe,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: JobsPageComponent
    }])
  ],
  exports: [],
  declarations: [JobsPageComponent],
  providers: [],
})
export class JobsPageModule { }
