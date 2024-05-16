import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="time-date-box">
    <div class="time">{{time | date:'HH:mm:ss'}}</div>
    <div class="date">{{time | date:'EEEE dd.MM.YYYY' }}</div>
  </div>`,
  styleUrl: './clock.component.css'
})
export class MyClock implements OnInit {
    time: any = Date.now();
    
    ngOnInit(): void {
        setInterval(() => {
            this.time = Date.now();
        }, 1000);
    }
}
