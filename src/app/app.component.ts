import { Component } from '@angular/core';
import { APIService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'By sign', url: '/signs', icon: 'star' },
    { title: 'By job', url: '/jobs', icon: 'hammer' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(

  ) { }
}
