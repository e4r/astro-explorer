import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DeducePlanetPipe } from 'src/app/pipes/deduce-planet.pipe';

@Component({
  selector: 'planet',
  template: `
  <span>
    {{((id|deducePlanet)|async)?.name}}
  </span>
  `,
  standalone: true,
  imports: [
    DeducePlanetPipe,
    CommonModule
  ],
  styleUrls: ['./planet.component.scss']
})

export class PlanetComponent implements OnInit {
  @Input() id!: string;
  constructor() { }

  ngOnInit() { }
}
