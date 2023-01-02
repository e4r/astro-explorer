import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DeduceJobPipe } from 'src/app/pipes/deduce-job.pipe';
import { DeduceSignPipe } from 'src/app/pipes/deduce-sign.pipe';
import { SignByIdPipe } from 'src/app/pipes/sign-by-id.pipe';

import { SignPageComponent } from './sign-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: SignPageComponent
    }]),
    CommonModule,
    DeduceJobPipe,
    IonicModule,
    DeduceSignPipe,
    SignByIdPipe
  ],
  exports: [],
  declarations: [SignPageComponent],
  providers: [],
})
export class SignPageModule { }
