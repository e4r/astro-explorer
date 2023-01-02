import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'rank',
  templateUrl: 'rank.component.html',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})

export class RankComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
