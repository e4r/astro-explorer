import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { DeduceSignPipe } from '../pipes/deduce-sign.pipe';
import { DeduceJobPipe } from '../pipes/deduce-job.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeduceJobPipe,
    FolderPageRoutingModule,
    DeduceSignPipe
  ],
  declarations: [FolderPage]
})
export class FolderPageModule { }
