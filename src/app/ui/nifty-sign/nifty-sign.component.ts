import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SIGNS_ELEMENTS } from 'src/app/constants/emoticons';
import { Sign } from 'src/app/interfaces/sign';

@Component({
  selector: 'nifty-sign',
  template: `
    <p class="nifty"> {{sign.name}} {{this.SIGNS_ELEMENTS[sign.name]}} </p>
  `,
  styleUrls: ['./nifty-sign.component.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class NiftySignComponent implements OnInit {

  @Input() sign!: Sign;
  SIGNS_ELEMENTS = SIGNS_ELEMENTS;
  constructor() { }

  ngOnInit() { }
}
