import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

enum Wochentage{
  Montag = 1,
  Dienstag,
  Mittwoch,
  Donnerstag,
  Freitag,
  Samstag,
  Sonntag
}

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="time-date-box">
    <div class="time">{{time | date:'HH:mm:ss'}}</div>
    <div class="date"> {{currentDay}} {{ time | date:'dd.MM.YYYY' }}</div>
  </div>`,
  styleUrl: './clock.component.css'
})

export class MyClock implements OnInit {
  time: any = Date.now();
  currentDay = Wochentage[new Date().getDay()]

    ngOnInit(): void {
        setInterval(() => {
            this.time = Date.now();
        }, 1000);
    }

}


